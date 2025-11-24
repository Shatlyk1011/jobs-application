import { FC } from 'react';
import { siteConfig } from '@/config';

interface Props {};

export default async function HowItWorks() {
  return (
    <section className="px-4 w-[70%] pt-14 pb-10">
      <div className='px-6 text-base pt-8 pb-12 rounded-2xl bg-popover w-full'>
        <h1 className='text-2xl font-semibold mb-6'>Как это работает?</h1>

        <p className='mb-4'><span className='font-semibold'>Ганат Менторы</span> — сервис карьерных консультаций с экспертами из ведущих IT- и финансовых компаний.</p>

        <ol className='flex flex-col gap-1 mb-6'>
          <li><span className='opacity-70'>1)</span> Выберите ментора на сайте.</li>
          <li><span className='opacity-70'>2)</span> Изучите профиль и оставьте заявку на консультацию.</li>
          <li><span className='opacity-70'>3)</span> Наш менеджер свяжется с Вами для уточнения запроса и подбора удобной даты/времени.</li>
          <li><span className='opacity-70'>4)</span> Подтвердите бронь — мы создадим чат в Telegram с Вами и ментором.</li>
          <li><span className='opacity-70'>5)</span> В день консультации отправим в чат ссылку на Zoom — и начнём!</li>
        </ol>

        <p className='mb-4'>Перед встречей задавайте вопросы которые хотели бы обсудить в чате, чтобы сэкономить время на сессии.</p>

        <div>
          Не знаете, какой ментор подойдёт? <br />
          Наш менеджер поможет с подбором — <a className='text-sidebar-primary' href={siteConfig.telegram_support} target='_blank' rel="noopener" >напишите нам.</a>
        </div>
      </div> 
    </section>
  )
};
