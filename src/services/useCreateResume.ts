import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";
import axios from "@/lib/axios";

import { type IResumeForm } from "@/types/resume";
import { InitialResumeFormState } from "../../data/resume";

export function useCreateResume(setForm: Dispatch<SetStateAction<IResumeForm>>, close: () => void) {
  const [isLoading, setLoading] = useState(false);
  const createResume = async (form: IResumeForm) => {
    try {
      setLoading(true);
      toast.loading("Sending request...", { id: "loading-toast-id" });

      const req = await axios("/resume", {
        method: "POST",
        data: JSON.stringify(form),
      });

      if (req.status === 201) {
        setForm(InitialResumeFormState);
        toast.success("Success. Your resume will be available after moderation.", {
          id: "loading-toast-id",
          duration: 6000,
        });
        close();
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again..", {
        id: "loading-toast-id",
        duration: 6000,
      });
    } finally {
      setForm(InitialResumeFormState);
      setLoading(false);
    }
  };

  return { createResume, isLoading };
}

export default useCreateResume;
