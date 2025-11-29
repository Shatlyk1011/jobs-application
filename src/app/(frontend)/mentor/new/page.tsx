import { Logo } from "@/components/ui/Logo";

import CreateMentorForm from "@/components/CreateMentorForm";

export default function MentorNewPage() {
  return (
    <main className="mx-auto w-full max-w-3xl p-5 text-center max-sm:p-3 max-sm:pb-8" >
      <header className="mb-6 flex items-center max-sm:flex-col justify-center gap-10 max-md:gap-4 max-sm:gap-5">
        <div className="flex-1">
          <Logo className="h-full w-full opacity-90 max-sm:h-16 " />
        </div>
        <div className="flex flex-2 flex-col gap-4 text-start">
          <h1 className="-tracking-three text-2xl leading-[1.2] font-medium text-balance max-sm:text-center">
            Спасибо за Ваш интерес стать частью команды Ganat.
          </h1>
          <p className="text-sm opacity-90 max-sm:text-center max-sm:max-w-[90%] max-sm:mx-auto">
            Мы рады талантливым и опытным менторам, способных поделиться знаниями и помочь начинающим и зрелым
            профессионалам достичь новых высот.
          </p>
          <p className="text-sm opacity-90 max-sm:text-center font-semibold max-sm:text-base max-sm:max-w-[90%] max-sm:mx-auto">
            Заполните пожалуйста анкету, <br className="hidden max-sm:block" /> чтобы мы могли <br className="max-md:hidden" /> больше узнать о Вас.
          </p>
        </div>
      </header>

      <CreateMentorForm />
    </main>
  );
}
