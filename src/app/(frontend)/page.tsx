import Hero from "@/components/Hero";
import { Logo } from "@/components/ui/Logo";

export default function Home() {
  return (
    <main className="bg-primary min-h-svh w-full">
      <header className="bg-primary" title="Salamaleykum">
        <Logo className="h-20 w-full" />
      </header>
      <section className="flex h-full w-full justify-center px-5 py-10">
        <Hero />
      </section>
    </main>
  );
}
