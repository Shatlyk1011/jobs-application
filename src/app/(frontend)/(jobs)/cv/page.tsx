import CVSection from "@/components/CVSection";
import { Button } from "@/components/ui/button";

export default async function JobsPage() {

  return (
    <main className="h-svh w-full">
      <section className="max-w-3xl text-center mx-auto w-full py-12">
        <h1 className="text-4xl font-semibold -tracking-two mb-4">Станьте заметнее для HR</h1>
        <p className="text-base leading-[1.3] mb-5 opacity-80">Заполните простую форму —  и мы разместим <br /> ваше резюме на нашем сайте</p>
        <Button>Разместить резюме</Button>
      </section>

      <section className="">
        <CVSection/>
      </section>
    </main> 
  );
}
