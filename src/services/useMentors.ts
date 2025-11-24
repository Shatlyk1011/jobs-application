import axios from "@/lib/axios";
import { IMentor, IMentors } from "@/types/mentors";
import { AxiosResponse } from "axios";
import { stringify } from "qs-esm";

const useMentors = () => {
  const getMentor = async (id: string) => {
    const { data } = await axios.get(`/mentors/${id || ""}`);
    return data;
  };

  const getMentors = async (query?: string) => {
    const { data }: AxiosResponse<IMentors> = await axios.get(`/mentors/${query || ""}`);
    return data.docs;
  };

  const getMentorBySlug = async (slug?: string): Promise<IMentor[]> => {
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
  };

  return { getMentor, getMentors, getMentorBySlug };
};

export default useMentors;
