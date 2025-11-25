"use client";
import { FC, useState } from "react";
import { stringify } from "qs-esm";
import { Where } from "payload";

import { IJob, } from "@/types/job";
import { useJobs } from "@/services/useJobs";

//components
import JobCards from "@/components/JobSection/JobCards";
import JobFilters from "@/components/JobSection/JobFilters";
import { debounce } from "@/composables/utils";
import ScreenLoading from "../ui/ScreenLoading";

interface Props {
  initialData: IJob[];
}

const JobSection: FC<Props> = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);

  if (!initialData) return null;
  const { getJobs } = useJobs()

  const fetchJobs = async (query: Where) => {
    const stringifiedQuery = stringify(
      { where: query },
      { addQueryPrefix: true },
    );
    try {
      setLoading(true)
      const jobs = await getJobs(stringifiedQuery);
      setData(jobs);
    } catch (err) {
      console.log('fetch jobs error', err);
    }
    finally {
      setLoading(false)
    }
  };

  const handleFilterRequest = debounce(fetchJobs, data?.length === 0 ? 500 : 1200);

  return (
    <>
      <JobFilters handleFilterRequest={handleFilterRequest} totalDocs={data.length} />
      <JobCards jobs={data} />
      {isLoading && (
        <ScreenLoading />
      )}
    </>
  );
};
export default JobSection;
