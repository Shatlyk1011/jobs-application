import axios from "@/lib/axios";

import { IJob, IJobs } from "@/types/job";
import { AxiosResponse } from "axios";

export const useJobs = () => {

  const getJob = async (id: string): Promise<IJob> => {
    return (await axios(`/jobs/${id}`)).data;
  };

  const getJobs = async (query?: string): Promise<IJob[]> => {
    const response: AxiosResponse<IJobs> = await axios(`/jobs/${query || ''}`);

    return response.data.docs;
  };

  return { getJob, getJobs };
};
