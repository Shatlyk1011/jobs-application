import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config";
import Link from "next/link";
import { FC } from "react";

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <footer className="bg-popover mb-5 rounded-2xl p-8">
      <div className="flex gap-8">
        {/* left */}
        <div className="flex basis-[30%]">
          <Logo className="h-16 w-max" />

          <div className="max-h-max rounded-xl p-4 text-start text-sm font-medium">
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
        </div>

        {/* right */}

        <div className="text-ring -tracking-one flex flex-1 justify-end gap-10 text-[16px] font-medium">
          <ul>
            <li className="text-foreground mb-3 text-[18px] font-semibold">Вакансии</li>
            <li className="mb-2">
              <Link href="/jobs">Список вакансий</Link>
            </li>
            <li>
              <a href={siteConfig.telegram_support}>Работадателям</a>
            </li>
          </ul>

          <ul>
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

          <ul>
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
      <p>© 2025 | Все права защищены</p>
    </footer>
  );
};
export default Footer;
