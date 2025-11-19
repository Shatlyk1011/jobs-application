"use client";
import { FC } from "react";
import Link from "next/link";

import { Coins, MapPin, StarIcon } from "lucide-react";

import { IJobs } from "@/types/job";

import { dateConvert } from "@/composables/dateConvert";
import { salaryConvert } from "@/composables/salaryConvert";

import CurrencyIcon from "@/components/ui/currency-icon";

interface Props {
  jobs: IJobs;
}

const JobCards: FC<Props> = ({ jobs }) => {
  return (
    <section className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 pb-20">
      {jobs.docs.map((job) => (
        <div key={job.id} className="bg-popover text-popover-foreground h-full min-h-[360px] rounded-md">
          <Link rel="noopener" target="_blank" href={`/job/${job.id}`} className="inline-flex h-full w-full p-5">
            <div className="flex h-full w-full flex-col">
              <div className="flex w-full flex-wrap justify-between gap-x-6 gap-y-2">
                <figure className="flex items-center gap-2">
                  <img
                    src={job.companyLogo?.url || "#"}
                    alt="text"
                    className="bg-secondary h-6 w-6 overflow-hidden rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">{job.companyName}</span>
                </figure>

                <time className="text-sm font-medium opacity-80">{dateConvert(job.createdAt)}</time>
              </div>

              <h3 className="my-10 text-xl font-semibold text-balance">{job.title}</h3>
              <div className="flex flex-1 items-end">
                <ul className="text-secondary-foreground flex flex-wrap gap-1.5 text-sm leading-[1.3] font-medium">
                  <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
                    <StarIcon className="h-4 w-4 opacity-60" />
                    <span>{job.level}</span>
                  </li>
                  <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
                    <MapPin className="h-4 w-4 opacity-60" />
                    <span>{job.location}</span>
                  </li>
                  <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
                    <Coins className="h-4 w-4 opacity-60" />
                    <span className="flex items-center">
                      {salaryConvert(job.salary.from, job.salary.to)}
                      <CurrencyIcon currency={job.salary.currency} isAvailable={!!job.salary.from && !!job.salary.to} />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};
export default JobCards;
