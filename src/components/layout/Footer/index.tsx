import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config";
import Link from "next/link";
import { FC } from "react";

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <footer className="bg-popover mb-5 rounded-2xl p-8">
      <div className="flex gap-8 max-lg:flex-col max-lg:gap-10">
        {/* left */}
        <div className="flex basis-[30%] gap-4 max-lg:gap-2.5 max-h-max items-center max-lg:order-2 max-lg:basis-full max-sm:flex-col">
          <Logo className="h-16 w-max max-sm:h-20" />

          <div className="max-h-max rounded-xl text-start text-sm font-medium text-nowrap max-sm:text-center">
            <span className="opacity-80">Служба поддержки</span> <br />{" "}
            <a
              target="_blank"
              rel="noopener"
              href={siteConfig.telegram_support}
              className="border-b border-current font-semibold"
            >
              Напишите нам
            </a>
          </div>
          <p className="text-sm text-ring mt-5 text-end max-lg:flex-1">© 2025 | Все права защищены</p>
        </div>

        {/* right */}
        <div className="text-ring -tracking-one flex flex-1 justify-end gap-8 text-[16px] font-medium max-lg:justify-center max-sm:flex-col max-sm:items-center max-sm:text-center">
          <ul className="max-lg:flex-1 ">
            <li className="text-foreground mb-3 text-[18px] font-semibold">Вакансии</li>
            <li className="mb-2">
              <Link href="/jobs">Список вакансий</Link>
            </li>
            <li>
              <a href={siteConfig.telegram_support}>Работадателям</a>
            </li>
          </ul>

          <ul className="max-lg:flex-1">
            <li className="text-foreground mb-3 text-[18px] font-semibold">Сервисы</li>
            <li className="mb-2">
              <Link href="/cv">Резюме</Link>
            </li>
            <li className="mb-2">
              <Link href="/cv?modal=open" replace>
                Разместите резюме
              </Link>
            </li>
            <li>
              <Link href="/mentors" replace>
                Менторы
              </Link>
            </li>
          </ul>

          <ul className="max-lg:flex-1">
            <li className="text-foreground mb-3 text-[18px] font-semibold">Документы</li>
            <li className="mb-2">
              <Link href="/">Конфиденциальность</Link>
            </li>
            <li>
              <Link href="/">Условия использования</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-sm text-ring mt-5 max-lg:hidden">© 2025 | Все права защищены</p>
    </footer>
  );
};
export default Footer;
