import { Logo } from '@/components/ui/Logo';
import { siteConfig } from '@/config';
import Link from 'next/link';
import { FC } from 'react';

interface Props {};

const Footer:FC<Props> = () => {
  return (
    <footer className="p-8 rounded-2xl bg-popover mb-5">
      <div className='flex gap-8'>
        {/* left */}
        <div className='flex basis-[30%]'>
          <Logo className='h-16 w-max'/>

          <div  className='p-4 text-sm max-h-max rounded-xl text-start font-medium'><span className='opacity-80'>Служба поддержки</span> <br /> <a target='_blank' rel="noopener" href={siteConfig.telegram_support} className='font-semibold border-b border-current'>Напишите нам</a></div>
          
        </div>

        {/* right */}

        <div className='text-[16px] text-ring flex gap-10 -tracking-one justify-end flex-1 font-medium'>
          <ul>
            <li className='font-semibold text-foreground text-[18px] mb-3'>Вакансии</li>
            <li className='mb-2'>
              <Link href="/jobs">Список вакансий</Link>
            </li>
            <li>
              <a href={siteConfig.telegram_support}>Работадателям</a>
            </li>
          </ul>

          <ul>
            <li className='font-semibold text-foreground text-[18px] mb-3'>Сервисы</li>
            <li className='mb-2'>
              <Link href="/cv">Резюме</Link>
            </li>
            <li className='mb-2'>
              <Link href="/cv?modal=open" replace>Разместите резюме</Link>
            </li>
            <li >
              <Link href="/mentors" replace>Менторы</Link>
            </li>
          </ul>

          <ul>
            <li className='font-semibold text-foreground text-[18px] mb-3'>Документы</li>
            <li className='mb-2'>
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
  )
};
export default Footer