import { stringify } from "qs-esm";

import JobSection from "@/components/JobSection";

import { useJobs } from "@/services/useJobs";
import { DEFAULT_LIMIT } from "@/shared/constant";

const stringifiedQuery = stringify(
  {
    where: {
      isVisible: {
        equals: true,
      },
    },
    limit: DEFAULT_LIMIT,
  },
  { addQueryPrefix: true },
);

export default async function JobsPage() {
  const { getJobs } = useJobs();

  const jobs = await getJobs(stringifiedQuery);

  if (!jobs) return null;

  return (
    <main className="h-full w-full">
      <div className="h-full w-full pt-10 max-sm:pt-6">
        <JobSection initialData={jobs} />
      </div>
    </main>
  );
}
