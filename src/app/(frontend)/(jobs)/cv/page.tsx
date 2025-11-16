import CVSection from "@/components/CVSection";
import { Button } from "@/components/ui/button";

export default async function JobsPage() {
  return (
    <main className="h-svh w-full">
      <section className="mx-auto w-full max-w-3xl py-12 text-center">
        <h1 className="-tracking-two mb-4 text-4xl font-semibold">Станьте заметнее для HR</h1>
        <p className="mb-5 text-base leading-[1.3] opacity-80">
          Заполните простую форму — и мы разместим <br /> ваше резюме на нашем сайте
        </p>
        <Button>Разместить резюме</Button>
      </section>

      <section className="">
        <CVSection />
      </section>
    </main>
  );
}
