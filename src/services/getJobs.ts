import axios from '@/lib/axios'

import { IJob } from "@/types/job"

export function getJobs(id: string): Promise<IJob>

export function getJobs(): Promise<IJob[]>

export async function getJobs(id?: string): Promise<IJob | IJob[]> {

  const { data } = await axios.get(`/jobs/${id || ""}`)

  return data.docs || data
}
