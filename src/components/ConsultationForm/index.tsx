'use client'
import dynamic from 'next/dynamic';
import { FC, Suspense, useState } from 'react';
import Spinner from '../ui/Spinner';
import { InitialConsultationFormState } from '../../../data/mentor';
import useCreateConsultation from '@/services/useCreateConsultation';
import { useConsultationZodForm } from '@/lib/zod/zod';

const Form = dynamic(() => import("./form-client"), {
  loading: () => <Spinner />,
  ssr: false,
});


interface Props {};

const ConsultationForm:FC<Props> = () => {
  const [form, setForm] = useState(InitialConsultationFormState);

  const { createConsultation, isLoading } = useCreateConsultation(setForm)

  const submit = async () => {
    await createConsultation(form);
  };

  const { errors, handleSubmit } = useConsultationZodForm(form, submit);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5 -tracking-one ">
        <h3 className='text-xl font-semibold mb-3'>Записаться на консультацию</h3>
        <h4 className='text-[14px] opacity-80 font-medium mb-1'>Ментор: <span className='opacity-60'>{'Amanov Aman'}</span></h4>
        <p className='text-[14px] opacity-80 font-medium'>Стоимость: <span className='opacity-60'> 200TMT / час онлайн занятия </span></p>
      </div>
      <Suspense>
        <Form form={form} setForm={setForm} isLoading={isLoading} errors={errors}/>
      </Suspense>
    </form>
  )
};
export default ConsultationForm