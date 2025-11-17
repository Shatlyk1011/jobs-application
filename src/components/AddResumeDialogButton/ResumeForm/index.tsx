'use client'
import { FC, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Spinner from '@/components/ui/Spinner';

const Form = dynamic(() => import("./form-client"), {
  loading: () => <Spinner />,
});


interface Props {};

const ResumeForm:FC<Props> = () => {

  return (
    <form className="flex flex-col gap-4">
      <Suspense>
        <Form />
      </Suspense>
    </form>
  )
};
export default ResumeForm