import Link from "next/link";
import { useJobs } from "@/services/useJobs";
import { siteConfig } from "@/config";

import { isoToDate } from "@/composables/dateConvert";
import { salaryConvert } from "@/composables/salaryConvert";
import CurrencyIcon from "@/components/ui/currency-icon";
import RichText from "@/components/RichText";
import ContactDialogButton from "@/components/ContactDialogButton";
import { Building2 } from "lucide-react";

export async function generateStaticParams() {
  const { getJobs } = useJobs();

  const jobs = await getJobs();
  return jobs.map((job) => ({ id: job.id.toString() }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function JobPage({ params }: Props) {
  const { id } = await params;

  const { getJob } = useJobs();

  const job = await getJob(id);

  return (
    <main className="relative box-content flex min-h-svh w-full gap-5 py-12 max-lg:flex-col max-sm:py-6">
      <article className="bg-popover h-full w-full basis-[70%] rounded-3xl px-[30px] py-12 pt-10 max-lg:order-2 max-sm:px-6 max-sm:py-8">
        <header>
          <dl>
            <dt className="sr-only">Вакансия опубликована</dt>
            <time className="" dateTime={isoToDate(job.createdAt)}>
              Вакансия опубликована {isoToDate(job.createdAt)}
            </time>
          </dl>

          <h1 className="mt-3 text-3xl font-medium">{job.title}</h1>
        </header>

        <ul className="text-sidebar-primary/70 dark:text-sidebar-primary/80 -tracking-one mt-4 flex flex-wrap gap-1.5 text-sm leading-[1.3] font-medium">
          <li className="bg-primary/10 dark:bg-primary/20 max-w-max rounded-full px-3 py-1.5">
            <span>{job.level}</span>
          </li>
          <li className="bg-primary/10 dark:bg-primary/20 max-w-max rounded-full px-3 py-1.5">
            <span>{job.location}</span>
          </li>
          <li className="bg-primary/10 dark:bg-primary/20 max-w-max rounded-full px-3 py-1.5">
            <span className="flex items-center">
              {salaryConvert(job.salary.from, job.salary.to)}
              <CurrencyIcon currency={job.salary.currency} isAvailable={!!job.salary.from && !!job.salary.to} />
            </span>
          </li>
        </ul>

        <div className="bg-secondary mt-10 rounded-2xl py-10 pr-[110px] pl-[30px] max-sm:mt-6 max-sm:px-5 max-sm:py-6">
          <RichText content={job.mdx} />
        </div>
        <p className="text-ring mt-4 text-[14px]">
          Важно: Редакция Ganat не несёт ответственности за информацию в публикации от авторов, источников,
          пользователей, включая текст и изображения. Если вы нашли ошибку, пожалуйста, сообщите нам об этом{" "}
          <a
            className="text-sidebar-primary border-b border-current"
            target="_blank"
            rel="noopener"
            href={`mailto:${siteConfig.mail_support}`}
          >
            help.ganat@mail.ru
          </a>{" "}
          или в{" "}
          <a
            target="_blank"
            rel="noopener"
            className="text-sidebar-primary border-b border-current"
            href={siteConfig.telegram_support}
          >
            телеграм
          </a>
        </p>
      </article>

      {/* right */}
      <aside className="max-w-[30%] basis-[30%] max-lg:flex max-lg:max-w-full max-lg:flex-col max-lg:gap-4">
        <div className="bg-popover mb-6 w-full rounded-3xl p-5 max-lg:mb-0">
          <header className="mb-4 flex items-center gap-2.5">
            <figure className="inline-block max-h-10 min-h-10 max-w-10 min-w-10">
              {job.base64Image?.data ? (
                <img
                  src={job.base64Image.data}
                  className="inline-block h-10 w-10 rounded-full bg-neutral-500 object-cover object-center"
                  alt="company logo"
                />
              ) : (
                <Building2 className="h-full w-full stroke-[1.5] opacity-50" />
              )}
            </figure>

            <span>{job.companyName}</span>
          </header>

          {job?.companyDescription && <p className="mb-2.5 text-sm wrap-break-word">{job.companyDescription}</p>}

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

        <div className="bg-popover mb-6 w-full rounded-3xl p-5 max-lg:mb-0">
          <span className="-tracking-one mb-6 inline-block text-sm font-medium max-lg:mb-4">Для отклика:</span>

          <ContactDialogButton
            jobContactUrl={job.jobContactUrl}
            additionalContact={job.additionalContact}
            additionalNote={job.additionalNote}
          />
        </div>

        <div className="bg-popover w-full rounded-3xl p-5 text-sm">
          Стань заметнее для работадателей →{" "}
          <Link target="_blank" rel="noopener" href="/cv" className="text-sidebar-primary">
            здесь
          </Link>
        </div>
      </aside>
    </main>
  );
}
