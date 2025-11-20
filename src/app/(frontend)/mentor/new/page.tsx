import { Logo } from "@/components/ui/Logo";

import MentorForm from "@/components/MentorForm";

export default function MentorNewPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-10 py-5 text-center" suppressHydrationWarning>
      <div className="mb-6 flex items-center justify-center gap-10">
        <div className="flex-1">
          <Logo className="h-full w-full opacity-90" />
        </div>
        <div className="flex flex-2 flex-col gap-4 text-start">
          <h1 className="-tracking-three text-2xl leading-[1.2] font-medium text-balance">
            Спасибо за Ваш интерес стать частью команды Ganat.
          </h1>
          <p className="text-sm opacity-90">
            Мы рады талантливым и опытным менторам, способных поделиться знаниями и помочь начинающим и зрелым
            профессионалам достичь новых высот.
          </p>
          <p className="text-sm opacity-90">
            Заполните пожалуйста анкету, чтобы мы могли <br /> больше узнать о Вас.
          </p>
        </div>
      </div>

      <MentorForm />
    </main>
  );
}
