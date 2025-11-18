import Hero from "@/components/Hero";
import { Logo } from "@/components/ui/Logo";

export default function Home() {
  return (
    <main className="bg-primary min-h-svh w-screen">
      <header className="bg-primary">
        <Logo className="h-20 w-full" />
      </header>
      <section className="flex h-full w-full justify-center px-5 pt-12">
        <Hero />
      </section>
    </main>
  );
}
