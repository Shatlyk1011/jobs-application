import { FC } from "react";
import { cn } from "@/lib/utils";

import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config";
import Link from "next/link";

interface Props {
  classes?: string;
}

const Footer: FC<Props> = ({ classes }) => {
  return (
    <footer className={cn("bg-popover mb-5 rounded-2xl p-8", classes)}>
      <div className="flex gap-8 max-lg:flex-col max-lg:gap-10">
        {/* left */}
        <div className="flex max-h-max basis-[30%] items-center gap-4 max-lg:order-2 max-lg:basis-full max-lg:gap-2.5 max-sm:flex-col">
          <Logo className="h-16 w-max max-sm:h-20" />

          <div className="max-h-max rounded-xl text-start text-sm font-medium text-nowrap max-sm:text-center">
            <span className="opacity-70">Нужна помощь?</span> <br />
            <a
              target="_blank"
              rel="noopener"
              href={siteConfig.telegram_support}
              className="border-b border-current leading-[1.1] font-semibold"
            >
              Напишите в службу <br /> поддержки
            </a>
          </div>
          <p className="text-ring mt-5 hidden text-end text-sm max-lg:block max-lg:flex-1">
            © 2025 | Все права защищены
          </p>
        </div>

        {/* right */}
        <div className="text-ring -tracking-one flex flex-1 justify-end gap-8 text-[16px] font-medium max-lg:justify-center max-sm:flex-col max-sm:items-center max-sm:text-center">
          <ul className="max-lg:flex-1">
            <li className="text-foreground mb-3 text-[18px] font-semibold">Вакансии</li>
            <li className="hover:text-foreground mb-2 transition max-sm:mb-1">
              <Link href="/jobs">Список вакансий</Link>
            </li>
            <li>
              <a className="hover:text-foreground transition" href={siteConfig.telegram_support}>
                Работадателям
              </a>
            </li>
          </ul>

          <ul className="max-lg:flex-1">
            <li className="text-foreground mb-3 text-[18px] font-semibold">Сервисы</li>
            <li className="mb-2 max-sm:mb-1">
              <Link className="hover:text-foreground transition" href="/cv">
                Резюме
              </Link>
            </li>
            <li className="mb-2 max-sm:mb-1">
              <Link className="hover:text-foreground transition" href="/cv?modal=open">
                Разместите резюме
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground transition" href="/mentors">
                Менторы
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground transition" href="/mentor/new" target="_blank" rel="noopener">
                Стать ментором
              </Link>
            </li>
          </ul>

          <ul className="max-lg:flex-1">
            <li className="text-foreground mb-3 text-[18px] font-semibold">Документы</li>
            <li className="mb-2 max-sm:mb-1">
              <Link className="hover:text-foreground transition" href="/">
                Конфиденциальность
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground transition" href="/">
                Условия использования
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-ring mt-5 flex items-center justify-between gap-4 text-xs max-lg:hidden">
        <p>© 2025 Ganat | Все права защищены</p>
        {/* <p>
          Developed by{" "}
          <a
            className="text-foreground opacity-70 transition hover:opacity-100"
            href="https://shatlykabdullayev.com"
            target="_blank"
            rel="noopener"
          >
            @shatlyk
          </a>
        </p> */}
      </div>
    </footer>
  );
};
export default Footer;
