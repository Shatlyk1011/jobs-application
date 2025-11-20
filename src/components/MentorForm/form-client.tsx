import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';

import CustomInput from '../ui/CustomInput';
import { MultiSelect } from '../MultiSelect';
import { MENTOR_PROFESSION } from '../../../data/mentor';
import { CheckCheckIcon, CheckIcon, Info, Paperclip } from 'lucide-react';
import { LANGUAGES } from '../../../data/filters';
import { Checkbox } from '../ui/checkbox';
import Link from 'next/link';
import { IMentor } from '@/types/mentors';
import { Button } from '../ui/button';

interface Props {
  form: IMentor
  setForm: Dispatch<SetStateAction<IMentor>>;
};

const getFileSize = (file: File) => {
  const sizeBytes = file.size;
  const mb = sizeBytes / (1024 ** 2);

  return mb.toFixed(2)
}

const Form:FC<Props> = ({form, setForm}) => {
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const [fileError, setFileError] = useState('')

  const handleInput = (type: keyof IMentor, value?: string | string[][] | File | null) => {
    setForm((prev) => ({ ...prev, [type]: value }));
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFileError('')
    const files = e.target.files
    if (files?.length) {
      const imageFile = files[0];

      if(+getFileSize(imageFile) >= 1) {
        setFileError('Размер не должен превышать 1мб')
        handleInput('image', null)

        return 
      }

      handleInput('image', imageFile)
    }
  }

  const imageRef = useRef<HTMLInputElement | null>(null)


  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    handleInput(name as keyof IMentor, value);
  };

  useEffect(() => {
    setForm(prev => ({...prev, language: selectedLanguages, profession: selectedProfessions}))
  }, [selectedLanguages, selectedProfessions])

  return (
    <>
      <div>
        <label className="mb-2 text-sm font-medium inline-block" htmlFor="username">Ваше имя/фамилия</label>
        <CustomInput placeholder="Аман Аманов" id="username" name="username" value={form.username} onChange={onInputChange}  />
      </div>

      <div>
        <label className="mb-2 text-sm font-medium inline-block" htmlFor="position">Позиция</label>
        <CustomInput placeholder="Senior Backend Developer at Belet" id="position" name="position" value={form.position} onChange={onInputChange}/>
      </div>

  <div>
    <label className="mb-2 text-sm font-medium inline-block">Сфера</label>
    <MultiSelect
      singleLine={true}
      className="bg-input/30 min-h-[41px] hover:bg-input/30"
      badgeClassname="bg-input/30 hover:bg-secondary"
      maxCount={3}
      placeholder="Выберите сферы менторства"
      animation={0}
      options={MENTOR_PROFESSION}
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
      className="bg-input/30 min-h-[41px] hover:bg-input/30"
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
      <div className="mb-6 text-sm font-medium inline-block">
        <span className="mb-2 inline-block">Фотография для профиля (max 1 mb)</span>

        <div className='flex gap-4 items-center'>
          <button onClick={() => imageRef.current?.click()} type="button" className="flex focus-within:ring-1 focus-within:ring-white/50 focus-within:outline-none items-center max-w-max gap-2 rounded-md pl-3 pr-4 transition py-1 h-[41px] justify-center bg-input/30 border border-input hover:bg-white/10 text-[14px]">
            {form?.image ? (
              <CheckIcon className="w-4 h-4" />
            ) : (
              <Paperclip className="w-4 h-4" />
            ) }
            <span>{form?.image ? "Выбрано" : "Выберите фото"}</span>
          </button>
          {form?.image && (
            <div className='flex flex-col text-[12px] -tracking-one'>
              <p title={form?.image.name} className='line-clamp-1'><span className='opacity-80'>Название:</span> {form?.image.name}</p>
              <p><span className='opacity-80'>Размер:</span> {getFileSize(form.image)} мб</p>
            </div>
          )}
        </div>
      </div>
      <input ref={imageRef} onChange={handleFile} type="file" accept=".jpg,.png,.webp" id="image" tabIndex={-1}  className="sr-only z-[-100] absolute left-[-999px]"/>

      <div className="mb-6">
        <label className="mb-2 text-sm font-medium inline-block" htmlFor="about">Коротко о Вас</label>
        <div className="my-2 text-sm opacity-70">
          <span className="mb-5 inline-block">Например, </span>
          <p className="mb-4">Приветствую, более 8 лет занимаюсь дизайном. Начал свою карьеру графическим дизайнером, а потом нашел себя в UX-дизайне. Сегодня являюсь ведущим Product Designer в компании -  Belli Creative</p>
        </div>
        <CustomInput as="textarea" placeholder="Расскажите коротко о себе" id="about" name="about" value={form.about} onChange={onInputChange}/>
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
        <CustomInput as="textarea" placeholder="Расскажите как вы сможете помочь ученикам" id="howCanYouHelp" name="howCanYouHelp" value={form.howCanYouHelp} onChange={onInputChange} />
      </div>

      <div>
        <label className="mb-2 text-sm font-medium inline-block" htmlFor="resumeLink">Ссылка на резюме или Ваши успешные кейсы</label>
        <CustomInput placeholder="google.drive/resume/10" id="resumeLink" name="resumeLink" value={form.resumeLink} onChange={onInputChange}/>
      </div>

      <div>
        <label className="mb-2 text-sm font-medium inline-block" htmlFor="email">Ваш email</label>
        <CustomInput placeholder="amanov@mail.ru" id="email" name="email" value={form.email} onChange={onInputChange}/>
      </div>

      <div>
        <label className="mb-2 text-sm font-medium inline-block" htmlFor="telegram">Ник в Telegram </label>
        <CustomInput placeholder="@amanov" id="telegram" name="telegram" value={form.telegram} onChange={onInputChange}/>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox className="" id="salary" required/>
        <label className="-tracking-two text-sm font-medium" htmlFor="salary">
          Я согласен на <Link href="/" className="border-b border-current text-sidebar-primary">обработку персональных данных</Link>
        </label>
      </div>

      <div className="mt-6">
        <Button type="submit">Отправить заявку</Button>
      </div>
    </>
  )
};
export default Form