"use client";
import dynamic from "next/dynamic";
import { FC, Suspense, useState } from "react";
import Spinner from "../ui/Spinner";
import { InitialConsultationFormState } from "../../../data/mentor";
import useCreateConsultation from "@/services/useCreateConsultation";
import { useConsultationZodForm } from "@/lib/zod/zod";

const Form = dynamic(() => import("./form-client"), {
  loading: () => <Spinner />,
  ssr: false,
});

interface Props {
  mentorName: string
  price: string

}

const ConsultationForm: FC<Props> = ({ mentorName, price }) => {
  const [form, setForm] = useState(InitialConsultationFormState);

  const { createConsultation, isLoading } = useCreateConsultation(setForm);

  const submit = async () => {
    await createConsultation(form);
  };

  const { errors, handleSubmit } = useConsultationZodForm(form, submit);

  return (
    <form onSubmit={handleSubmit}>
      <div className="-tracking-one mb-5">
        <h3 className="mb-3 text-xl font-semibold">Записаться на консультацию</h3>
        <h4 className="mb-1 text-[14px] font-medium opacity-80">
          Ментор: <span className="opacity-60">{mentorName}</span>
        </h4>
        <p className="text-[14px] font-medium opacity-80">
          Стоимость: <span className="opacity-60"> {price} / час онлайн занятия </span>
        </p>
      </div>
      <Suspense>
        <Form form={form} setForm={setForm} isLoading={isLoading} errors={errors} />
      </Suspense>
    </form>
  );
};
export default ConsultationForm;
