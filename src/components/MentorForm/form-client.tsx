import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { MENTOR_PROFESSION } from "../../../data/mentor";
import { LANGUAGES } from "../../../data/filters";

import { IMentor } from "@/types/mentors";

import { getFileSize } from "@/composables/getFileSize";

import { CheckIcon, Info, Paperclip } from "lucide-react";

//components
import CustomInput from "../ui/CustomInput";
import { MultiSelect } from "../MultiSelect";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import ImageSelect from "./image";

interface Props {
  form: IMentor;
  setForm: Dispatch<SetStateAction<IMentor>>;
  isLoading: boolean;
  errors: Partial<Record<"username" | "resumeLink" | "profession" | 'image' | "position" | "language" | "about" | "howCanYouHelp" | "email" | "telegram", string>>
}

const Form: FC<Props> = ({ form, setForm, isLoading, errors }) => {
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const [fileError, setFileError] = useState("");

  const handleInput = (type: keyof IMentor, value?: string | string[][] | File | null) => {
    setForm((prev) => ({ ...prev, [type]: value }));
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const files = e.target.files;
    if (files?.length) {
      const imageFile = files[0];

      if (+getFileSize(imageFile) >= 1) {
        setFileError("Размер файла не должен превышать 1мб");
        return;
      }

      handleInput("image", imageFile);
    }
  };


  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    handleInput(name as keyof IMentor, value);
  };

  useEffect(() => {
    setForm((prev) => ({ ...prev, language: selectedLanguages, profession: selectedProfessions }));
  }, [selectedLanguages, selectedProfessions]);

  return (
    <>
      <div>
        <label className="mb-2 inline-block text-sm font-medium" htmlFor="username">
          Ваше имя/фамилия
        </label>
        <CustomInput
          placeholder="Аман Аманов"
          id="username"
          name="username"
          errorMsg={errors.username}
          value={form.username}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label className="mb-2 inline-block text-sm font-medium" htmlFor="position">
          Позиция
        </label>
        <CustomInput
          placeholder="Senior Backend Developer at Belet"
          id="position"
          name="position"
          errorMsg={errors.position}
          value={form.position}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label className="mb-2 inline-block text-sm font-medium">Сфера</label>
        <MultiSelect
          singleLine={true}
          className="bg-input/30 hover:bg-input/30 min-h-[41px]"
          badgeClassname="bg-input/30 hover:bg-secondary"
          maxCount={3}
          placeholder="Выберите сферы менторства"
          errorMsg={errors.profession}
          animation={0}
          options={MENTOR_PROFESSION}
          onValueChange={setSelectedProfessions}
          defaultValue={selectedProfessions}
        />
      </div>

      <div>
        <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium">
          <span>Язык(и) общения</span>
          <button className="group relative cursor-pointer" type="button">
            <Info className="h-4 w-4" />
            <p className="border-input bg-popover invisible absolute top-0 left-0 z-10 w-[320px] translate-y-[-20%] rounded-2xl border p-3 text-start text-[14px] leading-[1.3] font-normal opacity-0 transition select-none group-focus:visible group-focus:opacity-100 group-focus:select-auto">
              Укажите языки, на которых Вам удобно общаться. Это поможет ученикам подобрать ментора по уровню владения
              языками.
            </p>
          </button>
        </div>
        <MultiSelect
          singleLine={true}
          className="bg-input/30 hover:bg-input/30 min-h-[41px]"
          badgeClassname="bg-input/30 hover:bg-secondary"
          maxCount={3}
          placeholder="Выберите языки"
          errorMsg={errors.language}
          animation={0}
          options={LANGUAGES}
          onValueChange={setSelectedLanguages}
          defaultValue={selectedLanguages}
        />
      </div>

      {/* Image */}
      <ImageSelect image={form.image} handleFile={handleFile} errorMsg={fileError} />

      <div className="mb-6">
        <label className="mb-2 inline-block text-sm font-medium" htmlFor="about">
          Коротко о Вас
        </label>
        <div className="my-2 text-sm opacity-70">
          <span className="mb-5 inline-block">Например, </span>
          <p className="mb-4">
            Приветствую, более 8 лет занимаюсь дизайном. Начал свою карьеру графическим дизайнером, а потом нашел себя в
            UX-дизайне. Сегодня являюсь ведущим Product Designer в компании - Belli Creative
          </p>
        </div>
        <CustomInput
          as="textarea"
          placeholder="Расскажите коротко о себе"
          id="about"
          errorMsg={errors.about}
          name="about"
          value={form.about}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label className="mb-2 inline-block text-sm font-medium" htmlFor="howCanYouHelp">
          С чем можете помочь ученикам?
        </label>
        <div className="my-2 text-sm opacity-70">
          <span className="mb-5 inline-block">Например, </span>
          <p className="mb-4">
            → Расскажу как написать свой первый пет проект. <br />
            → Научу оптимизировать код для высокой производительности. <br />
            → Расскажу о выборе фреймворков (React, Vue), CI/CD и интеграции с бэкендом. <br />→ Подготовлю к
            собеседованиям по фронтенду.
          </p>
        </div>
        <CustomInput
          as="textarea"
          placeholder="Расскажите как Вы сможете помочь ученикам"
          id="howCanYouHelp"
          errorMsg={errors.howCanYouHelp}
          name="howCanYouHelp"
          value={form.howCanYouHelp}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label className="mb-2 inline-block text-sm font-medium" htmlFor="resumeLink">
          Ссылка на резюме или Ваши успешные кейсы
        </label>
        <CustomInput
          placeholder="google.drive/resume/10"
          id="resumeLink"
          name="resumeLink"
          errorMsg={errors.resumeLink}
          value={form.resumeLink}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label className="mb-2 inline-block text-sm font-medium" htmlFor="email">
          Ваш email
        </label>
        <CustomInput placeholder="amanov@mail.ru" id="email" name="email" errorMsg={errors.email} value={form.email} onChange={onInputChange} />
      </div>

      <div>
        <label className="mb-2 inline-block text-sm font-medium" htmlFor="telegram">
          Ник в Telegram{" "}
        </label>
        <CustomInput
          placeholder="@amanov"
          id="telegram"
          name="telegram"
          errorMsg={errors.telegram}
          value={form.telegram}
          onChange={onInputChange}
        />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox className="" id="salary" required />
        <label className="-tracking-two text-sm font-medium" htmlFor="salary">
          Я согласен на{" "}
          <Link href="/" className="text-sidebar-primary border-b border-current">
            обработку персональных данных
          </Link>
        </label>
      </div>

      <div className="mt-6">
        <Button type="submit" disabled={isLoading}>Отправить заявку</Button>
      </div>
    </>
  );
};
export default Form;
