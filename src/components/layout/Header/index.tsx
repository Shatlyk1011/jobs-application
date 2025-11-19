import { FC } from "react";

import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <header className="flex h-16 items-center justify-between gap-5">
      <Link href="/" className="h-12 w-20 max-sm:min-w-14">
        <Logo className="w-full h-full text-inherit fill-none" />
      </Link>

      <nav className="flex flex-1 justify-center">
        <ul className="flex items-center gap-6 text-sm max-sm:text-sm max-sm:gap-4 font-medium tracking-tight">
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

      <div className="w-20 max-sm:w-14 flex justify-end">
        <ThemeToggle />
      </div>
    </header>
  );
};
export default Header;
