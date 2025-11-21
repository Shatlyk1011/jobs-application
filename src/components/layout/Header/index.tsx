import { FC } from "react";

import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

interface Props {
  sticky?: boolean
}

const Header: FC<Props> = ({ sticky }) => {
  return (
    <header className={cn("flex h-16 items-center justify-between gap-5 max-sm:gap-3 ", sticky && "sticky top-0")}>
      <Link href="/" className="h-16 w-20 max-sm:min-w-14">
        <Logo className="h-full w-full fill-none text-inherit" />
      </Link>

      <nav className="flex flex-1 justify-center">
        <ul className="flex items-center gap-6 text-base font-medium tracking-tight max-sm:gap-4 max-sm:text-sm">
          <li>
            <Link href={"/jobs"}>Вакансии</Link>
          </li>
          <li>
            <Link href={"/cv"}>Резюме</Link>
          </li>
          <li>
            <Link href={"/mentors"}>Менторы</Link>
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
