import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { MENTOR_PROFESSION } from "../../../data/mentor";
import { LANGUAGES, TLanguage } from "../../../data/filters";

import { IMentor, IMentorResponse } from "@/types/mentors";

import { getFileSize } from "@/composables/utils";

import { Info } from "lucide-react";

//components
import CustomInput from "../ui/CustomInput";
import { MultiSelect } from "../MultiSelect";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import ImageSelect from "./image";

interface Props {
  form: IMentorResponse;
  setForm: Dispatch<SetStateAction<IMentorResponse>>;
  isLoading: boolean;
  errors: Partial<
    Record<
      | "username"
      | "resumeLink"
      | "profession"
      | "image"
      | "position"
      | "language"
      | "about"
      | "howCanYouHelp"
      | "email"
      | "telegram",
      string
    >
  >;
}

const Form: FC<Props> = ({ form, setForm, isLoading, errors }) => {
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<TLanguage[]>([]);

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
          Your first/last name
        </label>
        <CustomInput
          placeholder="John Doe"
          id="username"
          name="username"
          errorMsg={errors.username}
          value={form.username}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label className="mb-2 inline-block text-sm font-medium" htmlFor="position">
          Position
        </label>
        <CustomInput
          placeholder="Senior Backend Developer at Antropic"
          id="position"
          name="position"
          errorMsg={errors.position}
          value={form.position}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label className="mb-2 inline-block text-sm font-medium">Field (mentoring)</label>
        <MultiSelect
          singleLine={true}
          className="bg-input/30 hover:bg-input/30 min-h-[41px]"
          badgeClassname="bg-input/30 hover:bg-secondary"
          maxCount={3}
          placeholder="Select areas of mentoring"
          errorMsg={errors.profession}
          animation={0}
          options={MENTOR_PROFESSION}
          onValueChange={setSelectedProfessions}
          defaultValue={selectedProfessions}
        />
      </div>

      <div>
        <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium">
          <span>Language(s) of Communication</span>
          <button className="group relative cursor-pointer" type="button">
            <Info className="h-4 w-4" />
            <p className="border-input bg-popover invisible absolute top-0 left-0 z-10 w-[320px] translate-y-[-20%] rounded-2xl border p-3 text-start text-[14px] leading-[1.3] font-normal opacity-0 transition select-none group-focus:visible group-focus:opacity-100 group-focus:select-auto">
              Indicate the languages ​​you are comfortable communicating in. This will help students find a mentor based
              on their language proficiency.
            </p>
          </button>
        </div>
        <MultiSelect
          singleLine={true}
          className="bg-input/30 hover:bg-input/30 min-h-[41px]"
          badgeClassname="bg-input/30 hover:bg-secondary"
          maxCount={3}
          placeholder="Select languages"
          errorMsg={errors.language}
          animation={0}
          options={LANGUAGES}
          // @ts-ignore all good
          onValueChange={setSelectedLanguages}
          defaultValue={selectedLanguages}
        />
      </div>

      {/* Image */}
      <ImageSelect image={form.image} handleFile={handleFile} errorMsg={fileError} />

      <div className="mb-6">
        <label className="mb-2 inline-block text-sm font-medium" htmlFor="about">
          About you
        </label>
        <div className="my-2 text-sm opacity-70">
          <span className="mb-5 inline-block">For example, </span>
          <p className="mb-4 select-none">
            Hello, I've been working in design for over 8 years. I started my career as a graphic designer and then
            found my niche in UX design. Today, I'm the Lead Product Designer at Belli Creative.
          </p>
        </div>
        <CustomInput
          as="textarea"
          placeholder="Tell us briefly about yourself."
          id="about"
          errorMsg={errors.about}
          name="about"
          value={form.about}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label className="mb-2 inline-block text-sm font-medium" htmlFor="howCanYouHelp">
          What can you help students with?
        </label>
        <div className="my-2 text-sm opacity-70">
          <span className="mb-5 inline-block">For example:, </span>
          <p className="mb-4 select-none">
            → I'll teach you how to write your first pet project. <br />
            → I'll teach you how to optimize your code for high performance. <br />
            → I'll talk about choosing frameworks (React, Vue), CI/CD, and backend integration. <br />→ I'll prepare you
            for frontend interviews.
          </p>
        </div>
        <CustomInput
          as="textarea"
          placeholder="Tell us how you can help students."
          id="howCanYouHelp"
          errorMsg={errors.howCanYouHelp}
          name="howCanYouHelp"
          value={form.howCanYouHelp}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label className="mb-2 inline-block text-sm font-medium" htmlFor="resumeLink">
          Link to your resume or your success stories
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
          Your email
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

      <div>
        <label className="mb-2 inline-block text-sm font-medium" htmlFor="telegram">
          Telegram account{" "}
        </label>
        <CustomInput
          placeholder="@jonh"
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
          I agree to the{" "}
          <Link href="/" className="text-sidebar-primary border-b border-current">
            processing of personal data
          </Link>
        </label>
      </div>

      <div className="mt-6">
        <Button type="submit" disabled={isLoading}>
          Submit
        </Button>
      </div>
    </>
  );
};
export default Form;
