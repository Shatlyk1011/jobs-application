"use client";
import { FC, useState } from "react";
import { AxiosResponse } from "axios";
import axios from "@/lib/axios";
import { stringify } from "qs-esm";
import { Where } from "payload";

import { IJob, IJobs } from "@/types/job";

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

  const fetchJobs = async (query: Where) => {
    const stringifiedQuery = stringify(
      {
        where: query,
      },
      { addQueryPrefix: true },
    );
    try {
      setLoading(true)
      const jobs: AxiosResponse<IJobs> = await axios(`/jobs${stringifiedQuery}`);
      setData(jobs.data.docs);

    } catch (err) {
      console.log('err', err);
    }
    finally {
      setLoading(false)
    }
  };

  const handleFilterRequest = debounce(fetchJobs, data?.length === 0 ? 2000 : 1200);

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
