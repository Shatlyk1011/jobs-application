"use client";
import { FC, Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { InitialMentorFormState } from "../../../data/mentor";

import Spinner from "../ui/Spinner";
import useCreateMentor from "@/services/useCreateMentor";
import useCreateImage from "@/services/useCreateImage";
import { useMentorZodForm } from "@/lib/zod/zod";

const Form = dynamic(() => import("./form-client"), {
  loading: () => <Spinner />,
  ssr: false,
});

interface Props {}

const MentorForm: FC<Props> = () => {
  const [form, setForm] = useState(InitialMentorFormState);

  const { createMentor, isLoading } = useCreateMentor(setForm);
  const { createImage } = useCreateImage();

  const submit = async () => {
    if (!form.image) return;
    const imageUrl = await createImage(form.image);
    const { image, ...rest } = form;
    await createMentor({ ...rest, imageUrl });
  };

  const { errors, handleSubmit } = useMentorZodForm(form, submit);

  useEffect(() => {
    const handleBeforeUnload = (e: any) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <div className="bg-popover mx-auto max-w-2xl rounded-2xl px-8 py-8 text-start">
      <form className="flex flex-col gap-5 rounded-xl" onSubmit={handleSubmit}>
        <Suspense>
          <Form form={form} setForm={setForm} isLoading={isLoading} errors={errors} />
        </Suspense>
      </form>
    </div>
  );
};
export default MentorForm;
