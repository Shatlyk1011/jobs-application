import Link from 'next/link';
import { FC } from 'react';

interface Props {};

const Header:FC<Props> = () => {
  return (
    <header className=" flex justify-between items-center gap-5 h-16">

      <Link href="/">
        Logo
      </Link>

      <nav className='flex-1 flex justify-end'>
        <ul className='flex items-center text-base font-medium tracking-tight gap-6'>
          <li>
            <Link href={'/vacancy'}>
            Вакансии
            </Link>
          </li>
          <li>
            <Link href={'/cv'}>
              Резюме
            </Link>
          </li>
          <li>
            <Link href={'/mentors'}>
              Менторы
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};
export default Header