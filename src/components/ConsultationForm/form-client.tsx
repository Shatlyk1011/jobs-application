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
      <div className="flex gap-4">
        <div className="w-full">
          <label className="mb-2 inline-block text-sm font-medium" htmlFor="username">
            Ваше имя*
          </label>
          <CustomInput
            placeholder="Sapar"
            id="username"
            name="username"
            errorMsg={errors.username}
            value={form.username}
            onChange={onInputChange}
          />
        </div>
        <div className="w-full">
          <label className="mb-2 inline-block text-sm font-medium" htmlFor="email">
            Почта*
          </label>
          <CustomInput
            placeholder="sapar@mail.ru"
            id="email"
            name="email"
            errorMsg={errors.email}
            value={form.email}
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-full">
          <label className="mb-2 inline-block text-sm font-medium" htmlFor="telegram">
            Ник в телеграм (через @)*
          </label>
          <CustomInput
            placeholder="@sapar"
            id="telegram"
            name="telegram"
            errorMsg={errors.telegram}
            value={form.telegram}
            onChange={onInputChange}
          />
        </div>
        <div className="w-full">
          <label className="mb-2 inline-block text-sm font-medium" htmlFor="phoneNumber">
            Номер телефона
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
          Ваш запрос
        </label>
        <CustomInput
          as="textarea"
          placeholder="Подготовиться к собеседованию, помочь с проектом"
          id="requestBody"
          name="requestBody"
          value={form.requestBody}
          onChange={onInputChange}
        />
      </div>

      <div className="mt-1">
        <Button type="submit" className="w-full" disabled={isLoading}>
          Записаться на консультацию
        </Button>
        <div className="text-ring mt-3 text-center text-sm">
          <p>
            Нажимая на кнопку «Записаться на консультацию», Вы соглашаетесь с <br />
          </p>
          <a className="text-sidebar-primary" href="#">
            Условиями использования
          </a>
        </div>
      </div>
    </div>
  );
};
export default Form;
