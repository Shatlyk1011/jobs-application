import { Dispatch, SetStateAction, useState } from "react";
import axios from "@/lib/axios";

import { toast } from "sonner";

import { InitialConsultationFormState } from "../../data/mentor";

import { IConsultation } from "@/types/mentors";

export function useCreateConsultation(setForm: Dispatch<SetStateAction<IConsultation>>) {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const createConsultation = async (form: IConsultation) => {
    try {
      setLoading(true);
      toast.loading("Sending request...", { id: "loading-toast-id" });

      const req = await axios("/consultation", {
        method: "POST",
        data: JSON.stringify(form),
      });

      if (req.status === 201) {
        setForm(InitialConsultationFormState);
        setSuccess(true);
        toast.success("Your request has been successfully created. We will contact you shortly.", {
          id: "loading-toast-id",
          duration: 6000,
        });
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.", {
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
