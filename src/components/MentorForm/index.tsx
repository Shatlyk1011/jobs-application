'use client'
import { FC, Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { InitialMentorFormState } from "../../../data/mentor";
import Spinner from "../ui/Spinner";

const Form = dynamic(() => import("./form-client"), {
  loading: () => <Spinner />,
  ssr: false
});

interface Props {};

const MentorForm:FC<Props> = () => {
  const [form, setForm] = useState(InitialMentorFormState)

  console.log('form', form);

  // useEffect(() => {
  //   const handleBeforeUnload = (e: any) => {
  //     e.preventDefault();
  //     e.returnValue = '';
  //   };
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  // }, []);
  return (
    <div className=" text-start px-8 py-8 rounded-2xl bg-popover max-w-2xl mx-auto">
      <form className=" rounded-xl flex flex-col gap-5">
        <Suspense>
          <Form form={form} setForm={setForm}/>
        </Suspense>
        
      </form>
    </div>
  )
};
export default MentorForm