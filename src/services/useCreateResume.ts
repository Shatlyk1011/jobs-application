import { Dispatch, SetStateAction, useState } from "react";
import axios from '@/lib/axios'

import { type IResumeForm } from "@/types/resume";
import { InitialResumeFormState } from "../../data/resume";

export function useCreateResume(setForm: Dispatch<SetStateAction<IResumeForm>>) {
  const [isLoading, setLoading] = useState(false)
  const createResume = async (form: IResumeForm) => {
    try { 
      setLoading(true)
      const req = await axios('/resume', {
        method: 'POST',
        data: JSON.stringify(form)
      })

      if(req.status === 201) {
        setForm(InitialResumeFormState)
      }

    } catch (err) {
      console.log('err useResume', err);
    }
    finally {
      setLoading(false)
    }
  }

  return {createResume, isLoading}

}

export default useCreateResume
