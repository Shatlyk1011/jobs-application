"use client";
import { FC } from "react";
import Link from "next/link";

import { Building2, Coins, MapPin, StarIcon } from "lucide-react";

import { IJob } from "@/types/job";

import { dateConvert } from "@/composables/dateConvert";
import { getLocation, salaryConvert } from "@/composables/salaryConvert";

import CurrencyIcon from "@/components/ui/currency-icon";
import EmptyResult from "@/components/ui/EmptyResult";

interface Props {
  jobs: IJob[];
}

const JobCards: FC<Props> = ({ jobs }) => {
  return (
    <section className="grid min-h-[478px] grid-cols-3 gap-5 pb-20 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:pb-12">
      {jobs?.length ? (
        jobs.map((job) => (
          <div
            key={job.id}
            className="bg-popover text-popover-foreground h-full min-h-[360px] rounded-lg max-sm:min-h-[280px]"
          >
            <Link target="_blank" rel="noopener" href={`/job/${job.id}`} className="inline-flex h-full w-full p-5">
              <div className="flex h-full w-full flex-col">
                <div className="flex w-full flex-wrap justify-between gap-x-6 gap-y-2">
                  <figure className="flex items-center gap-2">
                    {job.base64Image?.data ? (
                      <img
                        src={job.base64Image.data}
                        alt="text"
                        className="bg-secondary h-6 w-6 overflow-hidden rounded-full object-cover"
                      />
                    ) : (
                      <Building2 className="stroke-[1.5] opacity-60" />
                    )}
                    <span className="text-sm font-medium max-sm:text-base">{job.companyName}</span>
                  </figure>

                  <dl>
                    <dt className="sr-only">Вакансия опубликована</dt>
                    <time className="text-sm font-medium opacity-80 max-sm:text-base">
                      {dateConvert(job.createdAt)}
                    </time>
                  </dl>
                </div>

                <h3 className="my-10 text-lg font-semibold text-balance max-sm:text-xl">{job.title}</h3>
                <div className="flex flex-1 items-end">
                  <ul className="text-secondary-foreground flex flex-wrap gap-1.5 text-sm leading-[1.3] font-medium max-sm:text-base">
                    <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
                      <StarIcon className="h-4 w-4 opacity-60" />
                      <span>{job.level}</span>
                    </li>
                    <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
                      <MapPin className="h-4 w-4 opacity-60" />
                      <div className="first-letter:uppercase">
                        {getLocation(job.location)} <span className="lowercase">{job.format}</span>
                      </div>
                    </li>
                    <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
                      <Coins className="h-4 w-4 opacity-60" />
                      <span className="flex items-center">
                        {salaryConvert(job.salary.from, job.salary.to)}
                        <CurrencyIcon
                          currency={job.salary.currency}
                          isAvailable={!!job.salary.from && !!job.salary.to}
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <EmptyResult classes="col-span-3 max-lg:col-span-2 max-sm:col-span-1 max-w-1/3 max-sm:max-w-[300px] max-lg:max-w-1/2 mx-auto">
          По вашему запросу ничего не найдено. Попробуйте изменить фильтры поиска.
        </EmptyResult>
      )}
    </section>
  );
};
export default JobCards;
