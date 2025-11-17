import { getJobs } from "@/services/getJobs";

import { isoToDate } from "@/composables/dateConvert";
import { salaryConvert } from "@/composables/salaryConvert";
import CurrencyIcon from "@/components/ui/currency-icon";
import RichText from "@/components/RichText";
import ContactDialogButton from "@/components/ContactDialogButton";

export async function generateStaticParams() {
  const jobs = await getJobs();
  return jobs.map((job) => ({ id: job.id.toString() }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function JobPage({ params }: Props) {
  const { id } = await params;

  const job = await getJobs(id);

  return (
    <main className="relative box-content flex min-h-svh w-full gap-5 py-12">
      <article className="bg-popover h-full w-full basis-[70%] rounded-3xl px-[30px] py-12 pt-10">
        <header>
          <time className="" dateTime={isoToDate(job.createdAt)}>
            Вакансия опубликована {isoToDate(job.createdAt)}
          </time>

          <h1 className="mt-3 text-3xl font-medium">{job.title}</h1>
        </header>

        <ul className="text-sidebar-primary/80 mt-4 flex flex-wrap gap-1.5 text-sm leading-[1.3] font-medium">
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

        <div className="bg-secondary mt-10 rounded-2xl py-10 pr-[110px] pl-[30px]">
          <RichText content={job.mdx} />
        </div>
      </article>

      {/* right */}
      <aside className="basis-[30%]">
        <div className="bg-popover mb-6 w-full rounded-3xl p-6">
          <header className="mb-4 flex items-center gap-2.5">
            <figure className="inline-block h-10 w-10">
              <img src={job.companyLogo?.url} className="h-full w-full rounded-full bg-red-500 object-cover" alt="" />
            </figure>

            <span>{job.companyName}</span>
          </header>

          {job?.companyDescription && <p className="mb-2.5 text-base">{job.companyDescription}</p>}

          {/* <div className="my-4"></div> */}

          {job?.companyWebsite && (
            <a
              className="-tracking-three mt-2 inline-block border-b border-current text-sm leading-none font-semibold"
              href={job.companyWebsite}
              target="_blank"
              rel="noopener"
            >
              Подробнее о компании
            </a>
          )}
        </div>

        <div className="bg-popover mb-6 w-full rounded-3xl p-6">
          <span className="-tracking-one mb-6 inline-block text-sm font-medium">Для отклика:</span>

          <ContactDialogButton contactUrl={job.jobContactUrl} />
        </div>

        <div className="bg-popover w-full rounded-3xl p-6 text-sm">
          Стань заметнее для работадателей →{" "}
          <a className="text-sidebar-primary" href="#">
            здесь
          </a>
        </div>
      </aside>
    </main>
  );
}
