import { Dispatch, SetStateAction, useState } from "react";
import axios from "@/lib/axios";
import { toast } from "sonner";

import { InitialMentorFormState } from "../../data/mentor";

import { IMentorResponse } from "@/types/mentors";

export function useCreateMentor(setForm: Dispatch<SetStateAction<IMentorResponse>>) {
  const [isLoading, setLoading] = useState(false);

  const createMentor = async (form: IMentorResponse) => {
    try {
      setLoading(true);
      toast.loading("Отправляем запрос...", { id: "loading-toast-id" });

      const req = await axios("/mentors", {
        method: "POST",
        data: JSON.stringify(form),
      });

      if (req.status === 201) {
        setForm(InitialMentorFormState);
        toast.success("Спасибо за ваш отклик. Мы свяжемся с Вами в самое ближайшее время.", {
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
      setForm(InitialMentorFormState);
      setLoading(false);
    }
  };

  return { createMentor, isLoading };
}

export default useCreateMentor;
