import { getJobs } from "@/services/getJobs";

import { isoToDate } from "@/composables/dateConvert";
import { salaryConvert } from "@/composables/salaryConvert"
  ;
import CurrencyIcon from "@/components/ui/currency-icon";
import RichText from "@/components/RichText";
import ContactDialogButton from "@/components/ContactDialogButton";

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

  return (
    <main className="min-h-svh w-full flex gap-5 mt-12 relative box-content">
      <article className="h-full w-full bg-popover pt-10 px-[30px] basis-[70%] py-12 rounded-3xl">
        <header>
          <time className="" dateTime={isoToDate(job.createdAt)}>Вакансия опубликована {isoToDate(job.createdAt)}</time>

          <h1 className="mt-3 text-3xl font-medium">{job.title}</h1>
        </header>

        <ul className="text-sidebar-primary/80 flex mt-4 flex-wrap gap-1.5 text-sm leading-[1.3] font-medium">
          <li className="bg-primary/20 max-w-max rounded-full px-3 py-1.5">
            <span>{job.level}</span>
          </li>
          <li className="bg-primary/20 max-w-max rounded-full px-3 py-1.5">
            <span>{job.location}</span>
          </li>
          <li className="bg-primary/20 max-w-max rounded-full px-3 py-1.5">
            <span className="flex items-center">
              {salaryConvert(job.salary.from, job.salary.to)}
              <CurrencyIcon currency={job.salary.currency} isAvailable={!!job.salary.from && !!job.salary.to} />
            </span>
          </li>
        </ul>

        <div className="mt-10 py-10 pl-[30px] pr-[110px] bg-secondary rounded-2xl ">
          <RichText content={job.mdx} />
        </div>

      </article>

      {/* right */}
      <aside className=" basis-[30%]">
        <div className="bg-popover p-6 rounded-3xl w-full mb-6">
          <header className="flex items-center gap-2.5 mb-4">
            <figure className="w-10 h-10 inline-block">
              <img src="#" alt="" className="w-full h-full rounded-full bg-red-500" />
            </figure>

            <span>{job.companyName}</span>
          </header>

          {job?.companyDescription && (
            <p className="text-base mb-2.5">{job.companyDescription}</p>
          )}

          {/* <div className="my-4"></div> */}

          {job?.companyWebsite && (
            <a className="border-b border-current mt-2 font-semibold -tracking-three leading-none text-sm inline-block" href={job.companyWebsite} target="_blank" rel="noopener">Подробнее о компании</a>
          )}
        </div>

        <div className="p-6 rounded-3xl w-full bg-popover mb-6">
          <span className="text-sm font-medium -tracking-one mb-6 inline-block">Для отклика:</span>

          <ContactDialogButton />

        </div>

        <div className="p-6 rounded-3xl w-full bg-popover text-sm">
          Стань заметнее для работадателей → <a className="text-sidebar-primary" href="#">здесь</a>
        </div>

      </aside>
    </main>
  );
}
