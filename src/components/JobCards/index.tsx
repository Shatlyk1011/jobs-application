'use client'

import dateConvert from "@/composables/dateConvert";
import { getCurrencyIcon, salaryConvert } from "@/composables/salaryConvert";
import { IJobs } from "@/types/job";
import { Coins, MapPin, StarIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { TCurrency } from "../../../data/filters";

interface Props {
  jobs: IJobs;
}

const curr = (currency: TCurrency, isAvailable: boolean) => {
  if (!currency || !isAvailable) return null;

  const Icon = getCurrencyIcon(currency);

  if (typeof Icon === "string") {
    return <span>{Icon}</span>; // Wrap string in a span for rendering
  }
  return <Icon className="h-4 w-4" />;
};

const JobCards: FC<Props> = ({ jobs }) => {

  return (
    <section className="grid grid-cols-3 gap-5 pt-6 pb-20">
      {jobs.docs.map((job) => (
        <div key={job.id} className="bg-popover text-popover-foreground h-full min-h-[360px] rounded-md">
          <Link href={`/job/${job.id}`} className="inline-flex h-full w-full p-5">
            <div className="flex h-full w-full flex-col">
              <div className="flex w-full flex-wrap justify-between gap-x-6 gap-y-2">
                <figure className="flex items-center gap-2">
                  <img src="#" alt="text" className="bg-secondary h-6 w-6 overflow-hidden rounded-full" />
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
                      {curr(job.salary.currency, !!job.salary.from && !!job.salary.to)}
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
