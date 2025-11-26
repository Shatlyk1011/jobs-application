import { unstable_cache } from "@/composables/unstable-cache";
import { siteConfig } from "@/config";
import axios from "@/lib/axios";
import { IMentor, IMentors } from "@/types/mentors";
import { AxiosResponse } from "axios";
import { stringify } from "qs-esm";

const useMentors = () => {
  const getMentor = unstable_cache(async (id: string) => {
    const { data } = await axios.get(`/mentors/${id || ""}`);
    return data;
  }, ["useMentors"], { revalidate: siteConfig.revalidateTime });

  const getMentors = async (query?: string) => {
    const { data }: AxiosResponse<IMentors> = await axios.get(`/mentors/${query || ""}`);
    return data.docs;
  };

  const getMentorBySlug = unstable_cache(async (slug?: string): Promise<IMentor[]> => {
    const stringifiedQuery = stringify(
      {
        where: {
          slug: {
            equals: slug,
          },
        },
        limit: 1,
      },
      { addQueryPrefix: true },
    );
    const { data } = await axios.get(`/mentors/${stringifiedQuery}`);

    return data.docs || data;
  }, ['getMentorBySlug'], {revalidate: siteConfig.revalidateTime});

  return { getMentor, getMentors, getMentorBySlug };
};

export default useMentors;
