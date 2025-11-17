import { Dispatch, SetStateAction, useState } from "react";
import axios from "@/lib/axios";
import { toast } from "sonner";

import { type IResumeForm } from "@/types/resume";
import { InitialResumeFormState } from "../../data/resume";

export function useCreateResume(setForm: Dispatch<SetStateAction<IResumeForm>>, close: () => void) {
  const [isLoading, setLoading] = useState(false);
  const createResume = async (form: IResumeForm) => {
    try {
      setLoading(true);
      toast.loading("Отправляем запрос...", { id: "loading-toast-id" });

      const req = await axios("/resume", {
        method: "POST",
        data: JSON.stringify(form),
      });

      if (req.status === 201) {
        setForm(InitialResumeFormState);
        toast.success("Успешно. Ваше резюме будет доступно после проверки модератора", {
          id: "loading-toast-id",
          duration: 6000,
        });
      }
    } catch (err) {
      close();
      setForm(InitialResumeFormState);
      toast.error("Что то пошло не так. Пожалуйста заполните все поля правильно, и попробуйте еще раз.", {
        id: "loading-toast-id",
        duration: 6000,
      });
    } finally {
      setLoading(false);
    }
  };

  return { createResume, isLoading };
}

export default useCreateResume;
