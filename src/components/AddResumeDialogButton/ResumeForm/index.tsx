'use client'
import { FC, useState } from 'react';

import { Input } from '@/components/ui/input';
import { SelectComponent } from '../SelectComponent';
import { CURRENCY, FORMAT, LEVEL, LOCATION, PROFESSION } from '../../../../data/filters';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';

interface Props {};

const CURRENCY_OBJ = () => {
  return CURRENCY.map((curr => ({label:curr, value:curr})))
}

const ResumeForm:FC<Props> = () => {

  const [salaryView, setSalaryView] = useState(false)

  return (
    <form className="flex flex-col gap-4">
      <div className='flex gap-4'>
        <Input placeholder="Ваше имя" className='placeholder:text-sm' id="name" required/>
        <Input title="Пожалуйста укажите валидную ссылку на ваше резюме" className='placeholder:text-sm' placeholder="Ссылка на резюме" id="resumeUrl" required/>

      </div>
      <div className='flex gap-4'>
        <SelectComponent placeholder="Профессия" items={PROFESSION} />
        <SelectComponent placeholder="Уровень" items={LEVEL}/>
      </div>
      <div className='flex gap-4'>
        <SelectComponent placeholder="Местонахождения" items={LOCATION}/>
        <SelectComponent placeholder="Формат работы" items={FORMAT}/>
      </div>

      <div className={cn("flex flex-col items-start overflow-hidden relative gap-3 border px-4 py-4 rounded-xl", salaryView && "border-sidebar-primary/60 transition bg-sidebar-primary/30")}>
        <div className="flex gap-2 items-center ">
          <Checkbox onClick={() => setSalaryView(!salaryView)} className="" checked={salaryView} id="salary" />
          <label className="text-sm font-medium -tracking-two" htmlFor="salary">Указать зарплатные ожидения</label>
        </div>
        {/* salary */}
        <div className={cn("flex gap-3  -translate-y-10 overflow-hidden absolute opacity-0 invisible transition-opacity duration-300 select-none -z-1", salaryView && 'opacity-100 static scale-100 visible translate-y-0 select-auto z-1')}>
          <Input placeholder="от" className='placeholder:text-sidebar-primary-foreground'/>
          <Input placeholder="до" className='placeholder:text-sidebar-primary-foreground'/>
          <SelectComponent items={CURRENCY_OBJ()} placeholder="Валюта" classes='text-sidebar-primary-foreground!' />
        </div>

      </div>

      <div className='flex justify-end gap-3 mt-4'>

          <DialogClose asChild>
            <Button type="button" className='' variant="secondary">Отмена</Button>
          </DialogClose>
          
          <Button type="submit" className='' >Отправить</Button>
      </div>
    </form>
  )
};
export default ResumeForm