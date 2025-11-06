import { getJobs } from "@/services/getJobs";
import { convertLexicalToMarkdown } from '@payloadcms/richtext-lexical'

import { isoToDate } from "@/composables/dateConvert";
import { salaryConvert } from "@/composables/salaryConvert"
;
import { Coins, MapPin, StarIcon } from "lucide-react";
import CurrencyIcon from "@/components/ui/currency-icon";
import RichText from "@/components/RichText";

export async function generateStaticParams() {
  const jobs = await getJobs()
  return jobs.map((job) => ({ id: job.id.toString() }))
}

interface Props {
  params: Promise<{ id: string }>
}

export default async function JobPage({ params }: Props) {
  const { id } = await params

  const job = await getJobs(id)

  console.log('job', job);

  return (
    <main className="min-h-svh w-full flex gap-5 mt-12">
      <article className="h-full  w-full bg-popover pt-10 px-[30px] py-12 rounded-3xl flex-5">
        <header>
          <time className="" dateTime={isoToDate(job.createdAt)}>Вакансия опубликована {isoToDate(job.createdAt)}</time>

          <h1 className="mt-3 text-3xl font-medium">{"HR-People-Partner" || job.title}</h1>
        </header>

        <ul className="text-sidebar-primary flex mt-4 flex-wrap gap-1.5 text-sm leading-[1.3] font-medium">
          <li className="bg-sidebar-primary/15 flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
            <StarIcon className="h-4 w-4 opacity-30" />
            <span>{job.level}</span>
          </li>
          <li className="bg-sidebar-primary/15 flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
            <MapPin className="h-4 w-4 opacity-60" />
            <span>{job.location}</span>
          </li>
          <li className="bg-sidebar-primary/15 flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
            <Coins className="h-4 w-4 opacity-60" />
            <span className="flex items-center">
              {salaryConvert(job.salary.from, job.salary.to)}
              <CurrencyIcon currency={job.salary.currency} isAvailable={!!job.salary.from && !!job.salary.to} />
            </span>
          </li>
        </ul>

        <div className="mt-10 py-10 pl-[30px] pr-[110px] bg-secondary rounded-2xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque saepe blanditiis laborum cum sed explicabo repellendus voluptate nisi dolor quis, praesentium excepturi omnis doloribus assumenda provident soluta illum, magnam quo, autem voluptates pariatur. Accusantium iusto porro rem ipsum modi itaque voluptates laborum, odit sint aperiam vitae suscipit incidunt nam.
        </div>
      </article>

      {/* right */}

      <div className="flex-2 w-full bg-red-900">
        <RichText content={job.mdx}/>
      </div>
    </main>
  );
}
