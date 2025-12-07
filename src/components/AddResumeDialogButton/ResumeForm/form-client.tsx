import { cn } from "@/lib/utils";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import { CURRENCY, FORMAT, LEVEL, LOCATION, PROFESSION } from "../../../../data/filters";

//components
import { SelectComponent } from "../../SelectComponent";
import { Checkbox } from "@/components/ui/checkbox";

import { IResumeForm } from "@/types/resume";
import { SalaryType } from "@/types";
import CustomInput from "../../ui/CustomInput";
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
      <div className="flex gap-4 max-sm:gap-2">
        <CustomInput
          onChange={onInputChange}
          value={form.username}
          placeholder="Your name"
          name={"username" as keyof IResumeForm}
          errorMsg={errors?.username}
        />
        <CustomInput
          onChange={onInputChange}
          value={form.resumeLink}
          name={"resumeLink" as keyof IResumeForm}
          placeholder="Resume link"
          errorMsg={errors?.resumeLink}
        />
      </div>
      <div className="flex gap-4 max-sm:gap-2">
        <CustomInput
          onChange={onInputChange}
          value={form.profession}
          name={"profession" as keyof IResumeForm}
          placeholder="Job title (Frontend Dev)"
          errorMsg={errors?.profession}
        />

        <SelectComponent
          placeholder="Level"
          items={LEVEL}
          onChange={(value) => handleInput("level", value)}
          value={form.level}
          errorMsg={errors?.level}
        />
      </div>
      <div className="flex gap-4 max-sm:gap-2">
        <SelectComponent
          placeholder="Location"
          items={LOCATION}
          onChange={(value) => handleInput("location", value)}
          value={form.location}
          errorMsg={errors?.location}
        />
        <SelectComponent
          placeholder="Work format"
          items={FORMAT}
          onChange={(value) => handleInput("format", value)}
          value={form.format}
          errorMsg={errors?.format}
        />
      </div>

      <div
        className={cn(
          "relative flex flex-col items-start gap-3 overflow-hidden rounded-xl border px-4 py-4 max-sm:rounded-lg max-sm:px-3 max-sm:py-3",
          salaryView &&
            "border-sidebar-primary/30 dark:border-sidebar-primary/60 bg-43 dark:bg-sidebar-primary/30 transition",
        )}
      >
        <div className="flex items-center gap-2">
          <Checkbox onClick={() => setSalaryView(!salaryView)} checked={salaryView} id="salary" />
          <label className="-tracking-two text-foreground text-sm font-medium" htmlFor="salary">
            Specify salary expectations
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
            placeholder="from"
            className=""
          />
          <Input
            autoComplete="off"
            onChange={(e) => handleSalary("to", e.target.value)}
            placeholder="to"
            value={form.salary?.to || ""}
            className=""
          />
          <SelectComponent
            items={CURRENCY_OBJ()}
            placeholder="Currency"
            onChange={(value) => handleSalary("currency", value)}
            value={form.salary?.currency || ""}
          />
        </div>
      </div>
      <CustomInput
        onChange={onInputChange}
        value={form.feedback}
        placeholder="Your Telegram or email for feedback."
        name={"feedback" as keyof IResumeForm}
        errorMsg={errors?.feedback}
      />
    </>
  );
};
export default Form;
