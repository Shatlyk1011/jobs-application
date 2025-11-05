import axios from '@/lib/axios'
import { stringify } from 'qs-esm'

//components
import JobCards from "@/components/JobCards";
import JobFilters from "@/components/JobFilters";
import SearchBar from "@/components/SearchBar";

import { Where } from "payload";
import { IJobs } from '@/types/job';
import { AxiosResponse } from 'axios';


const query: Where = {

  and: [
    {
      title: {
        contains: ''
      }
    },
    {
      format: {
        equals: 'onsite',
      },
      level: {
        in: ['middle'],
      },
    },
    {
      location: {
        in: ['turkmenabat'],
      },
    },
    {
      format: {
        in: []
      }
    },
    {
      profession: {
        in: ['development']
      }
    }
  ],
}

const stringifiedQuery = stringify(
  {
    where: query, // ensure that `qs-esm` adds the `where` property, too!
  },
  { addQueryPrefix: true },
)


export default async function JobsPage() {

  const res: AxiosResponse<IJobs> = await axios(`/jobs${stringifiedQuery}`);
  console.log('res', res.data);

  return (
    <main className="h-svh w-full">
      <section className="h-full w-full pt-10">
        <JobFilters />

        <SearchBar />

        <JobCards />
      </section>
    </main>
  );
}
