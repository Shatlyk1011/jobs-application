import Link from "next/link";
import { FC } from "react";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <header className="flex h-16 items-center justify-between gap-5">
      <Link href="/">Logo</Link>

      <nav className="flex flex-1 justify-end">
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
    </header>
  );
};
export default Header;
