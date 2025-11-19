import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { cn } from "@/lib/utils";

import { CURRENCY, FORMAT, LEVEL, LOCATION, PROFESSION } from "../../../../data/filters";

//components
import { SelectComponent } from "../SelectComponent";
import { Checkbox } from "@/components/ui/checkbox";

import { IResumeForm } from "@/types/resume";
import { SalaryType } from "@/types";
import CustomInput from "./CustomInput";
import { Input } from "@/components/ui/input";

const CURRENCY_OBJ = () => {
  return CURRENCY.map((curr) => ({ label: curr, value: curr }));
};

interface Props {
  form: IResumeForm;
  setForm: Dispatch<SetStateAction<IResumeForm>>;
  salaryView: boolean;
  setSalaryView: Dispatch<SetStateAction<boolean>>;
  errors: Partial<
    Record<"username" | "resumeLink" | "profession" | "level" | "location" | "format" | "feedback", string>
  >;
}

const Form: FC<Props> = ({ form, setForm, salaryView, setSalaryView, errors }) => {
  const handleInput = (type: keyof IResumeForm, value?: string | string[][]) => {
    setForm((prev) => ({ ...prev, [type]: value }));
  };

  const handleSalary = (salaryKey: keyof SalaryType, value: string) => {
    setForm((prev) => ({
      ...prev,
      salary: { ...prev.salary, [salaryKey]: value } as SalaryType,
    }));
  };

  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    handleInput(name as keyof IResumeForm, value);
  };

  return (
    <>
      <div className="flex gap-4 max-sm:flex-col max-sm:gap-3">
        <CustomInput
          onChange={onInputChange}
          value={form.username}
          placeholder="Ваше имя"
          name={"username" as keyof IResumeForm}
          className="placeholder:text-sm"
          errorMsg={errors?.username}
        />
        <CustomInput
          onChange={onInputChange}
          value={form.resumeLink}
          title="Пожалуйста укажите валидную ссылку на ваше резюме"
          className="placeholder:text-sm"
          name={"resumeLink" as keyof IResumeForm}
          placeholder="Ссылка на резюме"
          errorMsg={errors?.resumeLink}
        />
      </div>
      <div className="flex gap-4 max-sm:flex-col max-sm:gap-3">
        <SelectComponent
          placeholder="Профессия"
          items={PROFESSION}
          onChange={(value) => handleInput("profession", value)}
          value={form.profession}
          errorMsg={errors?.profession}
        />
        <SelectComponent
          placeholder="Уровень"
          items={LEVEL}
          onChange={(value) => handleInput("level", value)}
          value={form.level}
          errorMsg={errors?.level}
        />
      </div>
      <div className="flex gap-4 max-sm:flex-col max-sm:gap-3">
        <SelectComponent
          placeholder="Местонахождения"
          items={LOCATION}
          onChange={(value) => handleInput("location", value)}
          value={form.location}
          errorMsg={errors?.location}
        />
        <SelectComponent
          placeholder="Формат работы"
          items={FORMAT}
          onChange={(value) => handleInput("format", value)}
          value={form.format}
          errorMsg={errors?.format}
        />
      </div>

      <div
        className={cn(
          "relative flex flex-col items-start gap-3 overflow-hidden rounded-xl border px-4 py-4",
          salaryView && "border-sidebar-primary/60 bg-sidebar-primary/30 transition",
        )}
      >
        <div className="flex items-center gap-2">
          <Checkbox onClick={() => setSalaryView(!salaryView)} className="" checked={salaryView} id="salary" />
          <label className="-tracking-two text-sm font-medium" htmlFor="salary">
            Указать зарплатные ожидения
          </label>
        </div>
        {/* salary */}
        <div
          className={cn(
            "invisible absolute -z-1 flex -translate-y-10 gap-3 overflow-hidden opacity-0 transition-opacity duration-300 select-none",
            salaryView && "visible static z-1 translate-y-0 scale-100 opacity-100 select-auto",
          )}
        >
          <Input
            autoComplete="off"
            onChange={(e) => handleSalary("from", e.target.value)}
            value={form.salary?.from || ""}
            placeholder="от"
            className="placeholder:text-sidebar-primary-foreground"
          />
          <Input
            autoComplete="off"
            onChange={(e) => handleSalary("to", e.target.value)}
            placeholder="до"
            value={form.salary?.to || ""}
            className="placeholder:text-sidebar-primary-foreground"
          />
          <SelectComponent
            items={CURRENCY_OBJ()}
            placeholder="Валюта"
            classes="text-sidebar-primary-foreground!"
            onChange={(value) => handleSalary("currency", value)}
            value={form.salary?.currency || ""}
          />
        </div>
      </div>
      <CustomInput
        onChange={onInputChange}
        value={form.feedback}
        placeholder="Ваш Telegram или email для обратной связи."
        name={"feedback" as keyof IResumeForm}
        className="placeholder:text-sm"
        errorMsg={errors?.feedback}
      />
    </>
  );
};
export default Form;
