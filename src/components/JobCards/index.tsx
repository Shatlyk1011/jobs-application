import { Coins, MapPin, StarIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

interface Props {};

const JobCards:FC<Props> = () => {
  return (
    <section className="pt-6 pb-20 grid grid-cols-3">
      <div className='bg-popover text-popover-foreground rounded-md h-full min-h-[360px]'>
        <Link href={'/'} className='inline-flex w-full p-5 h-full '>
          <div className='flex flex-col h-full w-full'>
            <div className='flex justify-between gap-x-6 gap-y-2 w-full flex-wrap'>
              <figure className='flex items-center gap-2'>
                <img src="#" alt="text" className='w-6 h-6 rounded-full overflow-hidden bg-secondary' />
                <span className='text-sm font-medium'>Авиасейлс</span>
              </figure>

              <time className='text-sm font-medium opacity-80'>yesterday</time>
            </div>

            <h3 className='my-10 text-xl font-semibold text-balance'>SEO-специалист / Веб-мастер</h3>
            <div className='flex-1 flex items-end'>
              <ul className='flex flex-wrap gap-1.5 text-sm font-medium text-secondary-foreground '>
                <li className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary max-w-max'>
                  <StarIcon className='w-4 h-4'/>
                  <span>Middle Senior</span>
                </li>
                <li className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary max-w-max'>
                  <MapPin  className='w-4 h-4'/>
                  <span>123123</span>
                </li>
                <li className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary max-w-max'>
                  <Coins  className='w-4 h-4'/>
                  <span>123123</span>
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
};
export default JobCards