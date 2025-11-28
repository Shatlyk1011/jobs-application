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
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <aside className="relative w-[30%] max-w-44 pt-10 max-md:w-full max-md:pt-8 max-sm:pt-4 max-md:max-w-max max-sm:absolute">
      <Button onClick={() => setOpen(!open)} size="icon" className="z-200 relative hidden max-md:flex" variant="outline">
        {open ? (
          <X />
        ) : (
          <Menu />
        )}
      </Button>
      {/* overlay */}
      <div role="button" onClick={close} className={cn("z-80 w-svh h-svh hidden max-md:block bg-black/30 fixed top-0 left-0 select-none transition-all duration-300", open ? "opacity-100 visible " : "opacity-0 invisible")}>

      </div>
      <div className={cn("sticky top-10 left-0 h-[calc(100svh-54px)] w-full max-md:absolute max-md:min-w-64 max-md:p-5 max-md:pt-22 max-md:z-100 max-md:bg-popover max-md:border-r max-md:border-white/5 max-md:min-h-svh max-md:top-0 max-md:-left-5 translate-x-0 transition", open ? 'max-md:translate-x-0' : 'max-md:translate-x-[-110%]')}>
        <header className="mb-8 flex items-center gap-2">
          <Link href="/mentors">
            <Logo className="h-14 w-max" />
          </Link>
          <h2 className="-tracking-two text-lg font-semibold">Менторы</h2>
        </header>
        <ul className="mb-10 flex flex-col gap-1 max-sm:gap-2 max-sm:text-lg text-base font-normal">
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
        <div className="-tracking-two flex flex-col text-sm max-sm:text-base leading-[1.3] font-medium">
          <p className="mb-4">
            Напишите нам, и мы <br /> поможем Вам при выборе ментора.
          </p>
          <Button asChild className="max-w-max px-7 py-4 " variant="secondary">
            <a href={siteConfig.telegram_support} className="max-md:min-w-full" target="_blank" rel="noopener">
              Написать нам
            </a>
          </Button>
        </div>
      </div>
    </aside>
  );
};
export default MentorsSidebar;
