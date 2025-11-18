import { FC } from "react";

import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <header className="flex h-16 items-center justify-between gap-5">
      <Link href="/" className="h-16 w-20">
        <Logo className="w-full h-full text-inherit fill-none" />
      </Link>

      <nav className="flex flex-1 justify-center">
        <ul className="flex items-center gap-6 text-base font-medium tracking-tight">
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

      <p>213</p>
    </header>
  );
};
export default Header;
