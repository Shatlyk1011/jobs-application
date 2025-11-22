import { FC } from 'react';
import Filters from './Filters';
import { Button } from '../ui/button';
import Link from 'next/link';

interface Props {};

const MentorSection:FC<Props> = () => {
  return (
    <section className="">
      <Filters/>

      {/* mentor card */}

      <Link href={`/mentors/${123}`} className='w-full p-4 rounded-xl bg-popover transition hover:bg-popover/50 flex items-start gap-5 shadow-xl/2'>
        {/* left */}
        <figure className='min-w-14 min-h-14'>
          <img src="https://cdn.prod.website-files.com/63b754bfedfa853c38da34fd/660bdb422da58631b9220e9d_PicRetouch_20240207_134501259.png" alt="profile image" className='w-14 h-14 object-cover rounded-[18px]' />
        </figure>

        {/* right */}

        <div className='text-start'>
          <h3 className='text-lg mb-3 -tracking-two'>Аманов Аман</h3>
          <h4 className='text-sm mb-5 -tracking-two'>Backend Developer at SpaceX</h4>

          <p className='text-sm opacity-80 mb-6 tracking-one'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum fugit dolorem quo similique neque magni omnis qui placeat vitae animi numquam natus, error quas totam vero debitis voluptatem accusamus eum?</p>

          <div className='flex items-center text-sm gap-4'>
            <Button variant="outline" className='text-[14px]'size="sm">Смотреть профиль</Button>

            <p className='text-[14px] -tracking-three'>200TMT / час занятия в ZOOM</p>
          </div>
        </div>
      </Link>
      
    </section>
  )
};
export default MentorSection