import { ChangeEvent, FC, MouseEvent, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import { CURRENCY, FORMAT, LEVEL, LOCATION, PROFESSION } from "../../../../data/filters";
import { InitialResumeFormState } from "../../../../data/resume";

//components
import { Input } from "@/components/ui/input";
import { SelectComponent } from "../SelectComponent";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { IResumeForm } from "@/types/resume";
import { SalaryType } from "@/types";
import useCreateResume from "@/services/useCreateResume";

const CURRENCY_OBJ = () => {
  return CURRENCY.map((curr) => ({ label: curr, value: curr }));
};

interface Props {}

const Form: FC<Props> = () => {
  const [salaryView, setSalaryView] = useState(false);

  const [form, setForm] = useState<IResumeForm>(InitialResumeFormState);

  const { createResume, isLoading } = useCreateResume(setForm);

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!salaryView) {
      const { salary, ...rest } = form;
      return await createResume(rest);
    }
    await createResume(form);
  };

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

  useEffect(() => {
    if (!salaryView) {
      setForm((prev) => {
        const { salary, ...rest } = prev;
        return rest;
      });
    }
  }, [salaryView]);

  return (
    <>
      <div className="flex gap-4">
        <Input
          autoComplete="off"
          onChange={onInputChange}
          value={form.username}
          placeholder="Ваше имя"
          name={"username" as keyof IResumeForm}
          className="placeholder:text-sm"
          required
        />
        <Input
          onChange={onInputChange}
          autoComplete="off"
          value={form.resumeLink}
          title="Пожалуйста укажите валидную ссылку на ваше резюме"
          className="placeholder:text-sm"
          name={"resumeLink" as keyof IResumeForm}
          placeholder="Ссылка на резюме"
          required
        />
      </div>
      <div className="flex gap-4">
        <SelectComponent
          placeholder="Профессия"
          items={PROFESSION}
          onChange={(value) => handleInput("profession", value)}
          value={form.profession}
        />
        <SelectComponent
          placeholder="Уровень"
          items={LEVEL}
          onChange={(value) => handleInput("level", value)}
          value={form.level}
        />
      </div>
      <div className="flex gap-4">
        <SelectComponent
          placeholder="Местонахождения"
          items={LOCATION}
          onChange={(value) => handleInput("location", value)}
          value={form.location}
        />
        <SelectComponent
          placeholder="Формат работы"
          items={FORMAT}
          onChange={(value) => handleInput("format", value)}
          value={form.format}
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

      <div className="mt-4 flex justify-end gap-3">
        <DialogClose asChild>
          <Button type="button" variant="secondary" disabled={isLoading}>
            Отмена
          </Button>
        </DialogClose>

        <Button type="submit" onClick={handleSubmit} disabled={isLoading}>
          Отправить
        </Button>
      </div>
    </>
  );
};
export default Form;
