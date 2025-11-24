import { stringify } from "qs-esm";

import JobSection from "@/components/JobSection";

import { useJobs } from "@/services/useJobs";

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
  const { getJobs } = useJobs();

  const jobs = await getJobs(stringifiedQuery);
  console.log("jobs", jobs);

  if (!jobs) return null;

  return (
    <main className="h-full w-full">
      <div className="h-full w-full pt-10">
        <JobSection initialData={jobs} />
      </div>
    </main>
  );
}
