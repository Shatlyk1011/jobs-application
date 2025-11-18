import axios from "@/lib/axios";
import { stringify } from "qs-esm";

import JobSection from "@/components/JobSection";

import { IJobs } from "@/types/job";
import { AxiosResponse } from "axios";

const stringifiedQuery = stringify(
  {
    where: {
      isVisible: {
        equals: true,
      },
    },
  },
  { addQueryPrefix: true },
);

export default async function JobsPage() {
  const response: AxiosResponse<IJobs> = await axios(`/jobs${stringifiedQuery}`);
  const { data } = response;

  return (
    <main className="h-full w-full">
      <div className="h-full w-full pt-10">
        <JobSection initialData={data} />
      </div>
    </main>
  );
}
