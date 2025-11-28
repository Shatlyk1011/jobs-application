import axios from "@/lib/axios";
import { siteConfig } from "@/config";

import { IJob, IJobs } from "@/types/job";
import { AxiosResponse } from "axios";

import { unstable_cache } from "@/composables/unstable-cache";

export const useJobs = () => {
  const getJob = unstable_cache(
    async (id: string): Promise<IJob> => {
      return (await axios(`/jobs/${id}`)).data;
    },
    ["getJob"],
    { revalidate: siteConfig.revalidateTime },
  );

  const getJobs = async (query?: string): Promise<IJob[]> => {
    const response: AxiosResponse<IJobs> = await axios(`/jobs/${query || ""}`);

    return response.data.docs;
  };

  return { getJob, getJobs };
};
