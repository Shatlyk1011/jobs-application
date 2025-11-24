import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import { Logo } from "@/components/ui/Logo";

export default function Home() {
  return (
    <main className="bg-primary min-h-svh w-full">
      <header className="bg-primary py-2" title="Salamaleykum">
        <Logo className="text-secondary-foreground h-20 w-full" />
      </header>
      <section className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center gap-30 px-5 pt-6 pb-2">
        <Hero />
        <Footer classes="mb-0" />
      </section>
    </main>
  );
}
