"use client";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

interface Props {
  sticky?: boolean;
}

const { jobs, resume, mentors } = {
  jobs: "/jobs",
  resume: "/cv",
  mentors: "/mentors",
};

const Header: FC<Props> = ({ sticky }) => {
  const pathname = usePathname();

  return (
    <header className={cn("flex h-16 items-center justify-between gap-5 max-sm:gap-1", sticky && "sticky top-0")}>
      <Link href="/" className="h-12 w-20 max-sm:min-w-8">
        <Logo className="h-full w-full fill-none text-inherit" />
      </Link>

      <nav className="flex flex-1 justify-center">
        <ul className="flex items-center text-base font-medium tracking-tight max-sm:text-sm">
          <li>
            <Link
              href={jobs}
              className={cn(
                "hover:bg-input/50 rounded-md px-4 py-2.5 transition max-sm:px-2",
                pathname === jobs && "text-sidebar-primary font-medium opacity-100",
              )}
            >
              Vacancies
            </Link>
          </li>
          <li>
            <Link
              href={resume}
              className={cn(
                "hover:bg-input/50 rounded-md px-4 py-2 transition max-sm:px-2",
                pathname === resume && "text-sidebar-primary font-medium opacity-100",
              )}
            >
              CV
            </Link>
          </li>
          <li>
            <Link
              href={mentors}
              className={cn(
                "hover:bg-input/50 rounded-md px-4 py-2.5 transition max-sm:px-2",
                pathname === mentors && "text-sidebar-primary font-medium opacity-100",
              )}
            >
              Mentors
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex w-20 justify-end max-sm:w-14">
        <ThemeToggle />
      </div>
    </header>
  );
};
export default Header;
