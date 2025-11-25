"use client";
import { FC, Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { InitialMentorFormState } from "../../../data/mentor";

import useCreateMentor from "@/services/useCreateMentor";

import { useMentorZodForm } from "@/lib/zod/zod";
import { nameToSlug } from "@/composables/utils";

import Spinner from "../ui/Spinner";
import SuccessBlock from "../ui/SuccessBlock";

const Form = dynamic(() => import("./form-client"), {
  loading: () => <Spinner />,
  ssr: false,
});

interface Props {}

const CreateMentorForm: FC<Props> = () => {
  const [form, setForm] = useState(InitialMentorFormState);

  const { createMentor, isLoading, isSuccess } = useCreateMentor(setForm);

  const submit = async () => {
    if (!form.image) return;
    const buffer = Buffer.from(await form.image.arrayBuffer())

    const imageBase64 = `data:${form.image.type};base64,${buffer.toString('base64')}`

    console.log('imageBase64', imageBase64);

    const { image, ...rest } = form;
    await createMentor({ ...rest, imageBase64, slug: nameToSlug(form.username) });
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
    <section className="bg-popover mx-auto max-w-2xl rounded-2xl px-8 py-8 text-start">
      {isSuccess ? (
        <form className="flex flex-col gap-5 rounded-xl" onSubmit={handleSubmit}>
          <Suspense>
            <Form form={form} setForm={setForm} isLoading={isLoading} errors={errors} />
          </Suspense>
        </form>
      ) : (
        <SuccessBlock />
      )}
    </section>
  );
};
export default CreateMentorForm;
