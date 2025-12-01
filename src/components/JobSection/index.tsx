"use client";
import { FC, useState } from "react";
import { stringify } from "qs-esm";
import { Where } from "payload";

import { IJob } from "@/types/job";
import { useJobs } from "@/services/useJobs";

//components
import JobCards from "@/components/JobSection/JobCards";
import JobFilters from "@/components/JobSection/JobFilters";
import { debounce } from "@/composables/utils";
import ScreenLoading from "../ui/ScreenLoading";
import { DEFAULT_LIMIT } from "@/shared/constant";

interface Props {
  initialData: IJob[];
}

const JobSection: FC<Props> = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);

  if (!initialData) return null;
  const { getJobs } = useJobs();

  const fetchJobs = async (query: Where) => {
    const stringifiedQuery = stringify({ where: query, limit: DEFAULT_LIMIT }, { addQueryPrefix: true });

    try {
      setLoading(true);
      const jobs = await getJobs(stringifiedQuery);
      setData(jobs);
    } catch (err) {
      console.log("fetch jobs error", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterRequest = debounce(fetchJobs, 1500);

  return (
    <>
      <JobFilters handleFilterRequest={handleFilterRequest} totalDocs={data.length} />
      <JobCards jobs={data} />
      {isLoading && <ScreenLoading />}
    </>
  );
};
export default JobSection;
