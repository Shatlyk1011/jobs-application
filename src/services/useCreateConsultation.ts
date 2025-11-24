import { Dispatch, SetStateAction, useState } from "react";
import axios from "@/lib/axios";

import { toast } from "sonner";

import { InitialConsultationFormState } from "../../data/mentor";

import { IConsultation } from "@/types/mentors";

export function useCreateConsultation(setForm: Dispatch<SetStateAction<IConsultation>>) {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(true);

  const createConsultation = async (form: IConsultation) => {
    try {
      setLoading(true);
      toast.loading("Отправляем запрос...", { id: "loading-toast-id" });

      const req = await axios("/consultation", {
        method: "POST",
        data: JSON.stringify(form),
      });

      if (req.status === 201) {
        setForm(InitialConsultationFormState);
        setSuccess(true);
        toast.success("Ваша заявка успешна создана. Мы свяжемся с Вами в ближайшее время.", {
          id: "loading-toast-id",
          duration: 6000,
        });
        // redirect user
      }
    } catch (err) {
      toast.error("Что то пошло не так. Попробуйте еще раз.", {
        id: "loading-toast-id",
        duration: 6000,
      });
    } finally {
      setForm(InitialConsultationFormState);
      setLoading(false);
    }
  };

  return { createConsultation, isLoading, isSuccess };
}

export default useCreateConsultation;
