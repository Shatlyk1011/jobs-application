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

interface Props {
  initialData: IJob[];
}

const JobSection: FC<Props> = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  if (!initialData) return null;

  const fetchJobs = async (query: Where) => {
    const stringifiedQuery = stringify(
      {
        where: query,
      },
      { addQueryPrefix: true },
    );

    const jobs: AxiosResponse<IJobs> = await axios(`/jobs${stringifiedQuery}`);
    setData(jobs.data.docs);
  };

  const handleFilterRequest = debounce(fetchJobs, 800);

  return (
    <div>
      <JobFilters handleFilterRequest={handleFilterRequest} totalDocs={data.length} />
      <JobCards jobs={data} />
    </div>
  );
};
export default JobSection;
