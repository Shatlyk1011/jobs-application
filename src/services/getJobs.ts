import axios from "@/lib/axios";

import { IJob } from "@/types/job";

export function getJobs(id: string, depth?: number): Promise<IJob>;

export function getJobs(): Promise<IJob[]>;

export async function getJobs(id?: string, depth?: number): Promise<IJob | IJob[]> {
  const { data } = await axios.get(`/jobs/${id || ""}?depth=${depth ?? 2}`);

  return data.docs || data;
}
