"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import { Logo } from "../../ui/Logo";
import { Button } from "../../ui/button";
import { siteConfig } from "@/config";
import { Menu, X } from "lucide-react";

interface Props {}

const { mentors, howitworks, mentornew } = {
  mentors: "/mentors",
  howitworks: "/mentors/howitworks",
  mentornew: "/mentor/new",
};

const MentorsSidebar: FC<Props> = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <aside className="relative top-0 w-[30%] max-w-44 pt-10 max-md:w-full max-md:max-w-max max-md:pt-8 max-sm:absolute max-sm:max-w-[calc(100%-50px)] max-sm:pt-4">
      <header className="relative z-200 hidden items-center justify-between max-md:flex">
        <Button onClick={() => setOpen(!open)} size="icon" className="" variant="outline">
          {open ? <X /> : <Menu />}
        </Button>
        <Link href="/mentors" className="gap flex flex-col items-center text-xs">
          <Logo className="hidden h-14 max-w-max max-sm:block" />
        </Link>
      </header>

      {/* overlay */}
      <div
        role="button"
        onClick={close}
        className={cn(
          "fixed top-0 left-0 z-80 hidden h-svh w-svh bg-black/30 transition-all duration-300 select-none max-md:block",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      ></div>
      <div
        className={cn(
          "max-md:bg-popover sticky top-10 left-0 flex h-[calc(100svh-108px)] w-full translate-x-0 flex-col transition max-md:absolute max-md:top-0 max-md:-left-3 max-md:z-100 max-md:min-h-svh max-md:min-w-64 max-md:border-r max-md:border-white/5 max-md:p-5 max-md:pt-22 max-sm:max-w-2/3",
          open ? "max-md:translate-x-0" : "max-md:translate-x-[-110%]",
        )}
      >
        <header className="mb-8 flex items-center gap-2">
          <Link href="/mentors">
            <Logo className="h-14 w-max" />
          </Link>
          <h2 className="-tracking-two text-lg font-semibold">Менторы</h2>
        </header>
        <ul className="mb-10 flex flex-col gap-1 text-base font-normal max-sm:gap-2 max-sm:text-lg">
          <li>
            <Link
              href={mentors}
              onClick={close}
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
              onClick={close}
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
              onClick={close}
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
        <div className="-tracking-two flex flex-col text-sm leading-[1.3] max-sm:text-base">
          <p className="tracking-one text-foreground/70 mb-4 max-sm:leading-[1.35]">
            Напишите нам, и мы <br /> поможем при выборе ментора.
          </p>
          <Button
            asChild
            className="max-w-max px-7 py-4 max-sm:border-neutral-500/30 max-sm:dark:border"
            variant="secondary"
          >
            <a href={siteConfig.telegram_support} className="max-md:min-w-full" target="_blank" rel="noopener">
              Написать нам
            </a>
          </Button>
        </div>

        <div className="text-ring mt-auto text-sm max-sm:mb-10 max-sm:text-base">
          <a
            className="hover:text-foreground inline-block text-nowrap transition"
            target="_blank"
            rel="noopener"
            href={siteConfig.mentor_agreement}
          >
            Договор с менторами
          </a>
          {/* <a className="inline-block text-nowrap transition hover:text-foreground" target="_blank" rel="noopener" href="#">
            Конфиденциальность
          </a> */}

          <p className="mt-10">
            © 2025 Ganat <br /> Все права защищены
          </p>
        </div>
      </div>
    </aside>
  );
};
export default MentorsSidebar;
