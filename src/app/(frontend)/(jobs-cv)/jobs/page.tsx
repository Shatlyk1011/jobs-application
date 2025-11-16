import axios from "@/lib/axios";

import JobSection from "@/components/JobSection";

import { IJobs } from "@/types/job";
import { AxiosResponse } from "axios";

export default async function JobsPage() {
  const response: AxiosResponse<IJobs> = await axios(`/jobs?limit=15`);
  const { data } = response;

  return (
    <main className="h-svh w-full">
      <div className="h-full w-full pt-10">
        <JobSection initialData={data} />
      </div>
    </main>
  );
}
