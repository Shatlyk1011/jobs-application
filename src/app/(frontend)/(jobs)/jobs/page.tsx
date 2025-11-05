import JobCards from "@/components/JobCards";
import JobFilters from "@/components/JobFilters";
import SearchBar from "@/components/SearchBar";

import axios from '@/lib/axios'

export default async function JobsPage() {

// const res = await axios('/jobs?limit=15');
// const data = await res.data
// const jobs = await res.json();
// console.log('data', data);

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
