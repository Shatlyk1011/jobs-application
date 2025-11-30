import { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config";

import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Менторы - Как это работает?",
  description: "Узнайте как работает секция с менторами",
})

export default async function HowItWorks() {
  return (
    <section className="w-full py-10 max-sm:pt-22">
      <div className="bg-popover w-full rounded-2xl p-8 pr-12 pb-12 text-sm max-sm:p-6 max-sm:pr-10">
        <h1 className="mb-4 text-2xl font-semibold">Как это работает?</h1>

        <p className="mb-3">
          <span className="font-semibold">Ганат Менторы</span> — сервис карьерных консультаций с экспертами из ведущих
          IT компаний.
        </p>

        <ol className="mb-5 flex flex-col gap-1">
          <li>
            <span className="opacity-70">1)</span> Выберите ментора на{" "}
            <Link className="hover:text-sidebar-primary border-b border-current transition" href="/mentors">
              сайте.
            </Link>
          </li>
          <li>
            <span className="opacity-70">2)</span> Изучите профиль и оставьте заявку на консультацию.
          </li>
          <li>
            <span className="opacity-70">3)</span> Наш менеджер свяжется с Вами для уточнения запроса и подбора удобной
            даты/времени.
          </li>
          <li>
            <span className="opacity-70">4)</span> Подтвердите бронь — мы создадим чат в Telegram с Вами и ментором.
          </li>
          <li>
            <span className="opacity-70">5)</span> В день консультации отправим в чат ссылку на онлайн встречу — и
            начнём!
          </li>
        </ol>

        <p className="mb-3">
          Перед встречей задавайте вопросы которые хотели бы обсудить в чате, чтобы сэкономить время на сессии.
        </p>

        <div>
          Не знаете, какой ментор подойдёт? <br />
          Наш менеджер поможет с подбором —{" "}
          <a
            className="hover:text-sidebar-primary border-b border-current transition"
            href={siteConfig.telegram_support}
            target="_blank"
            rel="noopener"
          >
            напишите нам.
          </a>
        </div>
      </div>
    </section>
  );
}
