import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import { Logo } from "@/components/ui/Logo";

export default function Home() {
  return (
    <main className="bg-primary min-h-svh w-full">
      <header className="bg-primary py-2" title="Salamaleykum">
        <Logo className="text-secondary-foreground h-20 w-full " />
      </header>
      <section className="flex flex-col gap-30 max-w-5xl mx-auto h-full w-full justify-center px-5 pt-6 pb-2">
        <Hero />
        <Footer classes="mb-0" />
      </section>
    </main>
  );
}
