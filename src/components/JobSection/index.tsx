'use client'
import { FC, useState } from 'react';
import { AxiosResponse } from 'axios';
import axios from '@/lib/axios'
import { stringify } from 'qs-esm';
import { Where } from 'payload';

import { IJobs } from '@/types/job';

//components
import JobCards from "@/components/JobSection/JobCards";
import JobFilters from "@/components/JobSection/JobFilters";
import SearchBar from "@/components/SearchBar";

interface Props {
  initialData: IJobs
};

function debounce(func: Function, delay:number) {
  let timeoutId: undefined | ReturnType<typeof setTimeout>;

  return function (...args: any) {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args)
    }, delay)
  }
}

const JobSection:FC<Props> = ({initialData}) => {
  const [data, setData] = useState(initialData)

  if(!initialData) return null

  const fetchJobs = async (query: Where) => {
    const stringifiedQuery = stringify(
    {
      where: query,
    },
      { addQueryPrefix: true },
    )

    const jobs: AxiosResponse<IJobs> = await axios(`/jobs${stringifiedQuery}`);
    setData(jobs.data)
  }

  const handleFilterRequest = debounce(fetchJobs, 800)

  return (
    <div>
      <JobFilters handleFilterRequest={handleFilterRequest} />
      <SearchBar />
      <JobCards jobs={data} />
    </div>
  )
};
export default JobSection