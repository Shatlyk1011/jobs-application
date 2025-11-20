import { Logo } from "@/components/ui/Logo";

import MentorForm from "@/components/MentorForm";

export default function MentorNewPage() {

  return (
    <main className="w-full text-center max-w-3xl mx-auto px-10 py-5" suppressHydrationWarning>
      <div className="flex gap-10 items-center justify-center mb-6">
        <div className="flex-1">
          <Logo className="h-full w-full opacity-90"/>
        </div>
        <div className="flex flex-col gap-4 text-start flex-2">
          <h1 className="text-2xl leading-[1.2] -tracking-three font-medium text-balance">Спасибо за Ваш интерес стать частью команды Ganat.</h1>
          <p className="text-sm opacity-90">Мы рады талантливым и опытным менторам, способных поделиться знаниями и помочь начинающим и зрелым профессионалам достичь новых высот.</p>
          <p className="text-sm opacity-90">Заполните пожалуйста анкету, чтобы мы могли <br /> больше узнать о Вас.</p>
        </div>
      </div>
      
      <MentorForm />
    </main>
  );
}
