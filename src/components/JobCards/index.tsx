import dateConvert from '@/composables/dateConvert';
import { getCurrencyIcon, salaryConvert } from '@/composables/salaryConvert';
import { IJobs } from '@/types/job';
import { Coins, MapPin, StarIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { TCurrency } from '../../../data/filters';

interface Props {
  jobs: IJobs
};

const curr = (currency: TCurrency, isAvailable: boolean) => {
  if (!currency || !isAvailable) return null

  const Icon = getCurrencyIcon(currency)

  console.log('Icon', Icon);

  if (typeof Icon === "string") {
    return <span>{Icon}</span>; // Wrap string in a span for rendering
  }
  return <Icon className='w-4 h-4' />;
}

const JobCards: FC<Props> = ({ jobs }) => {
  const { docs } = jobs

  return (
    <section className="pt-6 pb-20 grid grid-cols-3 gap-5">
      {docs.map((job) => (
        <div key={job.id} className='bg-popover text-popover-foreground rounded-md h-full min-h-[360px]'>
          <Link href={'/'} className='inline-flex w-full p-5 h-full '>
            <div className='flex flex-col h-full w-full'>
              <div className='flex justify-between gap-x-6 gap-y-2 w-full flex-wrap'>
                <figure className='flex items-center gap-2'>
                  <img src="#" alt="text" className='w-6 h-6 rounded-full overflow-hidden bg-secondary' />
                  <span className='text-sm font-medium'>{job.companyName}</span>
                </figure>

                <time className='text-sm font-medium opacity-80'>{dateConvert(job.createdAt)}</time>
              </div>

              <h3 className='my-10 text-xl font-semibold text-balance'>{job.title}</h3>
              <div className='flex-1 flex items-end'>
                <ul className='flex flex-wrap gap-1.5 text-sm font-medium text-secondary-foreground '>
                  <li className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary max-w-max'>
                    <StarIcon className='w-4 h-4' />
                    <span>{job.level}</span>
                  </li>
                  <li className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary max-w-max'>
                    <MapPin className='w-4 h-4' />
                    <span>{job.location}</span>
                  </li>
                  <li className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary max-w-max'>
                    <Coins className='w-4 h-4' />
                    <span className='flex items-center ' >{salaryConvert(job.salary.from, job.salary.to)}{curr(job.salary.currency, (!!job.salary.from && !!job.salary.to))}</span>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  )
};
export default JobCards