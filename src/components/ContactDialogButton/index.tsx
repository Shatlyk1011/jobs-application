import { FC } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button';

interface Props {};

const ContactDialogButton:FC<Props> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button data-slot="dialog-trigger" variant="default" className="w-full py-5">Посмотреть контакты</Button>
      </DialogTrigger>
      <DialogContent className='bg-popover border-none rounded-3xl'>
        <DialogHeader>
          <DialogTitle className='mb-6'>Контакты работодателя</DialogTitle>
          <DialogDescription className='mb-4'>
            <a href="#" className='border-b border-current text-sidebar-primary'>Ссылка на вакансию</a>
          </DialogDescription>
        </DialogHeader>
        <div className='bg-secondary text-secondary-foreground p-5 rounded-2xl text-sm'>
          <p>Никогда не переводите работодателю деньги. Если вы столкнулись с мошенничеством или ошибкой — пожалуйста, сообщите нам в <a href="#" className='border-b border-current'>телеграм</a></p>
        </div>
      </DialogContent>
    </Dialog>
  )
};
export default ContactDialogButton