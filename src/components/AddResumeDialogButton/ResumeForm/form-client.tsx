import { FC, useState } from "react";
import { cn } from "@/lib/utils";

import { CURRENCY, FORMAT, LEVEL, LOCATION, PROFESSION } from "../../../../data/filters";

//components
import { Input } from "@/components/ui/input";
import { SelectComponent } from "../SelectComponent";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

const CURRENCY_OBJ = () => {
  return CURRENCY.map((curr) => ({ label: curr, value: curr }));
};

interface Props {}

const Form: FC<Props> = () => {
  const [salaryView, setSalaryView] = useState(false);

  return (
    <>
      <div className="flex gap-4">
        <Input placeholder="Ваше имя" className="placeholder:text-sm" id="name" required />
        <Input
          title="Пожалуйста укажите валидную ссылку на ваше резюме"
          className="placeholder:text-sm"
          placeholder="Ссылка на резюме"
          id="resumeUrl"
          required
        />
      </div>
      <div className="flex gap-4">
        <SelectComponent placeholder="Профессия" items={PROFESSION} />
        <SelectComponent placeholder="Уровень" items={LEVEL} />
      </div>
      <div className="flex gap-4">
        <SelectComponent placeholder="Местонахождения" items={LOCATION} />
        <SelectComponent placeholder="Формат работы" items={FORMAT} />
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
          <Input placeholder="от" className="placeholder:text-sidebar-primary-foreground" />
          <Input placeholder="до" className="placeholder:text-sidebar-primary-foreground" />
          <SelectComponent items={CURRENCY_OBJ()} placeholder="Валюта" classes="text-sidebar-primary-foreground!" />
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-3">
        <DialogClose asChild>
          <Button type="button" className="" variant="secondary">
            Отмена
          </Button>
        </DialogClose>

        <Button type="submit" className="">
          Отправить
        </Button>
      </div>
    </>
  );
};
export default Form;
