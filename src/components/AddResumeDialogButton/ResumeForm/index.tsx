import { FC, useState } from "react";
import dynamic from "next/dynamic";
import Spinner from "@/components/ui/Spinner";
import useCreateResume from "@/services/useCreateResume";
import { IResumeForm } from "@/types/resume";
import { InitialResumeFormState } from "../../../../data/resume";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useZodForm } from "@/lib/zod";

const Form = dynamic(() => import("./form-client"), {
  loading: () => <Spinner />,
});

interface Props {
  close: () => void;
}

const ResumeForm: FC<Props> = ({ close }) => {
  const [salaryView, setSalaryView] = useState(false);

  const [form, setForm] = useState<IResumeForm>(InitialResumeFormState);

  const { createResume, isLoading } = useCreateResume(setForm, close);

  const submit = async () => {
    if (!salaryView) {
      const { salary, ...rest } = form;
      return await createResume(rest);
    }
    await createResume(form);
  };

  const { errors, handleSubmit } = useZodForm(form, submit);
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Form form={form} setForm={setForm} errors={errors} salaryView={salaryView} setSalaryView={setSalaryView} />
      <div className="mt-4 flex justify-end gap-3">
        <DialogClose asChild>
          <Button type="button" variant="secondary" disabled={isLoading}>
            Отмена
          </Button>
        </DialogClose>

        <Button type="submit" disabled={isLoading}>
          Отправить
        </Button>
      </div>
    </form>
  );
};
export default ResumeForm;
