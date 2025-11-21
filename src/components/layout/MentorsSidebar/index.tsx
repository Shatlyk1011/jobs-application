'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { Logo } from '../../ui/Logo';
import { Button } from '../../ui/button';
import { siteConfig } from '@/config';

interface Props {};

const { mentors, howitworks, mentornew } = {
  mentors: '/mentors',
  howitworks: '/mentors/howitworks',
  mentornew: '/mentor/new',
}

const MentorsSidebar:FC<Props> = () => {
  const pathname = usePathname();

return (
  <div className='w-[30%] relative pt-10'>

    <aside className="h-[calc(100svh-54px)] sticky top-10 left-0 w-full">
      <header className='flex items-center mb-8'>
        <Logo className='h-16 w-max'/>
        <h2 className='text-lg font-medium'>Менторы</h2>
      </header>
      <ul className='text-base font-normal flex flex-col gap-1 mb-10'>
        <li>
          <Link href={mentors} className={cn("opacity-80 hover:opacity-100 transition", pathname === mentors && 'text-sidebar-primary font-medium opacity-100')}>Менторы</Link>
        </li>
        <li>
          <Link href={howitworks} className={cn("opacity-80 hover:opacity-100 transition", pathname === howitworks && 'text-sidebar-primary font-medium opacity-100')}>Как это работает</Link>
        </li>
        <li>
          <Link href={mentornew} className={cn("opacity-80 hover:opacity-100 transition", pathname === mentornew && 'text-sidebar-primary font-medium opacity-100')}>Стать ментором</Link>
          
        </li>
      </ul>
      <div className='flex flex-col text-base leading-[1.3] font-medium -tracking-two'>
        <p className='mb-4'>Нужна помощь при <br /> подборе ментора? <br /></p>
        <p className='mb-6'>Напишите нам, <br /> и мы поможем</p>
        <Button asChild className='text-sm py-4 px-7 max-w-max ' variant="secondary">
          <a href={siteConfig.telegram_support} target='_blank' rel="noopener">Написать нам</a>
        </Button>
      </div>
    </aside>
  </div>

  )
};
export default MentorsSidebar