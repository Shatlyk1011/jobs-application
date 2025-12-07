import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { IConsultation } from "@/types/mentors";

//components
import CustomInput from "../ui/CustomInput";
import { Button } from "../ui/button";

interface Props {
  form: IConsultation;
  setForm: Dispatch<SetStateAction<IConsultation>>;
  isLoading: boolean;
  errors: Partial<Record<"username" | "email" | "telegram", string>>;
}

const Form: FC<Props> = ({ form, setForm, isLoading, errors }) => {
  const handleInput = (type: keyof IConsultation, value?: string | string[][] | File | null) => {
    setForm((prev) => ({ ...prev, [type]: value }));
  };

  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    handleInput(name as keyof IConsultation, value);
  };
  return (
    <div className="flex flex-col gap-y-4 pb-2">
      <div className="flex gap-4 max-sm:flex-col">
        <div className="w-full">
          <label className="mb-2 inline-block text-sm font-medium" htmlFor="username">
            Your name*
          </label>
          <CustomInput
            placeholder="John"
            id="username"
            name="username"
            errorMsg={errors.username}
            value={form.username}
            onChange={onInputChange}
          />
        </div>
        <div className="w-full">
          <label className="mb-2 inline-block text-sm font-medium" htmlFor="email">
            Email*
          </label>
          <CustomInput
            placeholder="john@mail.ru"
            id="email"
            name="email"
            errorMsg={errors.email}
            value={form.email}
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="flex gap-4 max-sm:flex-col">
        <div className="w-full">
          <label className="mb-2 inline-block text-sm font-medium" htmlFor="telegram">
            Telegram nickname (via @)*
          </label>
          <CustomInput
            placeholder="@doe"
            id="telegram"
            name="telegram"
            errorMsg={errors.telegram}
            value={form.telegram}
            onChange={onInputChange}
          />
        </div>
        <div className="w-full">
          <label className="mb-2 inline-block text-sm font-medium" htmlFor="phoneNumber">
            Phone number
          </label>
          <CustomInput
            placeholder="61415926"
            id="phoneNumber"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="w-full">
        <label className="mb-2 inline-block text-sm font-medium" htmlFor="requestBody">
          Your request
        </label>
        <CustomInput
          as="textarea"
          placeholder="Prepare for an interview, help with a project"
          id="requestBody"
          name="requestBody"
          value={form.requestBody}
          onChange={onInputChange}
        />
      </div>

      <div className="mt-1">
        <Button type="submit" className="w-full" disabled={isLoading}>
          Schedule a consultation
        </Button>
        <div className="text-ring mt-3 text-center text-sm">
          <p>
            By clicking the "Schedule a consultation" button, you agree to the <br />
          </p>
          <a className="text-sidebar-primary" href="#">
            terms of Use
          </a>
        </div>
      </div>
    </div>
  );
};
export default Form;
