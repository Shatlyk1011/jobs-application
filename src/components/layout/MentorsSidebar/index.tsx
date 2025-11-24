"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { Logo } from "../../ui/Logo";
import { Button } from "../../ui/button";
import { siteConfig } from "@/config";

interface Props {}

const { mentors, howitworks, mentornew } = {
  mentors: "/mentors",
  howitworks: "/mentors/howitworks",
  mentornew: "/mentor/new",
};

const MentorsSidebar: FC<Props> = () => {
  const pathname = usePathname();

  return (
    <aside className="relative w-[30%] max-w-44 pt-10">
      <div className="sticky top-10 left-0 h-[calc(100svh-54px)] w-full">
        <header className="mb-8 flex items-center gap-2">
          <Link href="/mentors">
            <Logo className="h-14 w-max" />
          </Link>
          <h2 className="-tracking-two text-lg font-semibold">Менторы</h2>
        </header>
        <ul className="mb-10 flex flex-col gap-1 text-base font-normal">
          <li>
            <Link
              href={mentors}
              className={cn(
                "opacity-80 transition hover:opacity-100",
                pathname === mentors && "text-sidebar-primary font-medium opacity-100",
              )}
            >
              Менторы
            </Link>
          </li>
          <li>
            <Link
              href={howitworks}
              className={cn(
                "opacity-80 transition hover:opacity-100",
                pathname === howitworks && "text-sidebar-primary font-medium opacity-100",
              )}
            >
              Как это работает
            </Link>
          </li>
          <li>
            <Link
              href={mentornew}
              target="_blank"
              rel="noopener"
              className={cn(
                "opacity-80 transition hover:opacity-100",
                pathname === mentornew && "text-sidebar-primary font-medium opacity-100",
              )}
            >
              Стать ментором
            </Link>
          </li>
        </ul>
        <div className="-tracking-two flex flex-col text-sm leading-[1.3] font-medium">
          <p className="mb-4">
            Напишите нам, и мы <br /> поможем Вам при выборе ментора.
          </p>
          <Button asChild className="max-w-max px-7 py-4" variant="secondary">
            <a href={siteConfig.telegram_support} target="_blank" rel="noopener">
              Написать нам
            </a>
          </Button>
        </div>
      </div>
    </aside>
  );
};
export default MentorsSidebar;
