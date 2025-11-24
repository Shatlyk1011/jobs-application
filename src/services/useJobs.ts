import axios from "@/lib/axios";

import { IJob } from "@/types/job";

export const useJobs = () => {

  const getJob = async (id:string): Promise<IJob> => {
    return await axios(`/jobs/${id}`)
  }

  const getJobs = async (query?:string): Promise<IJob[]> => {
    const response = await axios(`/jobs/${query}`)

    return response.data.docs
  }

  return {getJob, getJobs}
}