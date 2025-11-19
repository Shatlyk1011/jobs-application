'use client'
import { MouseEvent, useRef, useState } from "react";

//components
import { SelectComponent } from "@/components/SelectComponent";
import CustomInput from "@/components/ui/CustomInput";
import { Logo } from "@/components/ui/Logo";

import { LANGUAGES, PROFESSION } from "../../../../../data/filters";
import { IMentor } from "@/types/mentors";
import { InitialMentorFormState } from "../../../../../data/mentor";
import { MultiSelect } from "@/components/MultiSelect";
import { Info, Paperclip } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";



export default function MentorNewPage() {
  const [form, setForm] = useState(InitialMentorFormState)

  const imageRef = useRef<HTMLInputElement | null>(null)

  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

    const handleInput = (type: keyof IMentor, value?: string | string[][]) => {
    setForm((prev) => ({ ...prev, [type]: value }));
  };
  return (
    <main className="w-full text-center max-w-3xl mx-auto px-10 py-5">
      <div className="flex gap-10 items-center justify-center mb-6">
        <Link href="/" className="flex-1">
          <Logo className="h-full w-full opacity-90"/>
        </Link>
        <div className="flex flex-col gap-4 text-start flex-2">
          <h1 className="text-2xl leading-[1.2] -tracking-three font-medium text-balance">Спасибо за Ваш интерес стать частью команды Ganat.</h1>
          <p className="text-sm opacity-90">Мы рады талантливым и опытным менторам, способных поделиться знаниями и помочь начинающим и зрелым профессионалам достичь новых высот.</p>
          <p className="text-sm opacity-90">Заполните пожалуйста анкету, чтобы мы могли  <br /> больше узнать о Вас.</p>
        </div>
      </div>
      
      <div className=" text-start px-8 py-8 rounded-2xl bg-popover max-w-2xl mx-auto">

        <form className=" rounded-xl flex flex-col gap-5">
          <div>
            <label className="mb-2 text-sm font-medium inline-block" htmlFor="username">Ваше имя/фамилия</label>
            <CustomInput placeholder="Аманов Аман" id="username" name="username"/>
          </div>

          <div>
            <label className="mb-2 text-sm font-medium inline-block" htmlFor="position">Позиция</label>
            <CustomInput placeholder="Senior Backend Developer at Belet" id="position" name="position"/>
          </div>

          <div>
            <label className="mb-2 text-sm font-medium inline-block">Сфера</label>
            <MultiSelect
              singleLine={true}
              className="bg-input/30 min-h-[40px] hover:bg-input/30"
              badgeClassname="bg-input/30 hover:bg-secondary"
              maxCount={3}
              placeholder="Выберите сферы менторства"
              animation={0}
              options={PROFESSION}
              onValueChange={setSelectedProfessions}
              defaultValue={selectedProfessions}
            />
          </div>

          <div>
            <div className="mb-2 inline-flex gap-2 items-center text-sm font-medium" >
              <span>Язык(и) общения</span>
              <button className="relative group cursor-pointer" type="button">
                <Info className="w-4 h-4"/>
                <p className="absolute top-0 group-focus:opacity-100 group-focus:visible group-focus:select-auto opacity-0 invisible select-none transition translate-y-[-20%] left-0 w-[320px] text-[14px] font-normal leading-[1.3] text-start p-3 border-input border rounded-2xl bg-popover z-10">Укажите языки, на которых Вам удобно общаться. Это поможет ученикам подобрать ментора по уровню владения языками.</p>
              </button>
            </div>
            <MultiSelect
              singleLine={true}
              className="bg-input/30 min-h-[40px] hover:bg-input/30"
              badgeClassname="bg-input/30 hover:bg-secondary"
              maxCount={3}
              placeholder="Выберите языки"
              animation={0}
              options={LANGUAGES}
              onValueChange={setSelectedLanguages}
              defaultValue={selectedLanguages}
            />
          </div>

        {/* Image */}
          <>
            <div className="mb-6 text-sm font-medium inline-block">
              <span className="mb-2 inline-block">Фотография для профиля</span>

              <button onClick={() => imageRef.current?.click()} type="button" className="flex focus-within:ring-1 focus-within:ring-white/50 focus-within:outline-none items-center max-w-max gap-3 rounded-md pl-3 pr-4 transition py-1 h-[40px] justify-center bg-input/30 border border-input hover:bg-white/10 text-[14px]">
                <Paperclip className="w-5 h-5"/>
                <span>Выберите фото</span>
              </button>
            </div>
            <input ref={imageRef} type="file" id="image" tabIndex={-1}  className="sr-only z-[-100] absolute left-[-999px]"/>
          </>

          <div className="mb-6">
            <label className="mb-2 text-sm font-medium inline-block" htmlFor="about">Коротко о Вас</label>
            <div className="my-2 text-sm opacity-70">
              <span className="mb-5 inline-block">Например, </span>
              <p className="mb-4">Приветствую, более 8 лет занимаюсь дизайном. Начал свою карьеру графическим дизайнером, а потом нашел себя в UX-дизайне. Сегодня являюсь ведущим Product Designer в компании -  Belli Creative</p>
            </div>
            <CustomInput as="textarea" placeholder="Расскажите коротко о себе" id="about" name="about"/>
          </div>

          <div>
            <label className="mb-2 text-sm font-medium inline-block" htmlFor="howCanYouHelp">С чем можете помочь ученикам?</label>
            <div className="my-2 text-sm opacity-70">
              <span className="mb-5 inline-block">Например, </span>
              <p className="mb-4">
                → Расскажу как написать свой первый пет проект. <br />
                → Научу оптимизировать код для высокой производительности. <br />
                → Расскажу о выборе фреймворков (React, Vue), CI/CD и интеграции с бэкендом. <br />
                → Подготовлю к собеседованиям по фронтенду.
              </p>
            </div>
            <CustomInput as="textarea" placeholder="Расскажите как вы сможете помочь ученикам" id="howCanYouHelp" name="howCanYouHelp"/>
          </div>

          <div>
            <label className="mb-2 text-sm font-medium inline-block" htmlFor="resumeLink">Ссылка на резюме или Ваши успешные кейсы</label>
            <CustomInput placeholder="google.drive/resume/10" id="resumeLink" name="resumeLink"/>
          </div>

          <div>
            <label className="mb-2 text-sm font-medium inline-block" htmlFor="email">Ваш email</label>
            <CustomInput placeholder="amanov@mail.ru" id="email" name="email"/>
          </div>

          <div>
            <label className="mb-2 text-sm font-medium inline-block" htmlFor="telegram">Ник в Telegram </label>
            <CustomInput placeholder="@amanov" id="telegram" name="telegram"/>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox className="" id="salary" />
            <label className="-tracking-two text-sm font-medium" htmlFor="salary">
              Я соглашаюсь с <Link href="/" className="border-b border-current text-sidebar-primary">обработкой персональных данных</Link>
            </label>
          </div>

          <div className="mt-10">
            <Button>Отправить заявку</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
