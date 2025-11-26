import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import { Logo } from "@/components/ui/Logo";

export default function Home() {
  return (
    <main className="bg-primary min-h-svh w-full">
      <div className="mx-auto max-w-5xl">
        <header className="bg-primary py-2" title="Salamaleykum">
          <Logo className="h-20 w-max mx-auto text-gray-100" />
        </header>
        <section className="mx-auto h-full w-full max-w-5xl justify-center px-12 pt-6 max-sm:pt-2 max-lg:px-8 max-sm:px-4">
          <div className="min-h-[50vw]">
            <Hero />
          </div>
        </section>
        <div className="mx-auto max-w-5xl px-12 pb-5 max-lg:px-8 max-sm:px-4">
          <Footer classes="mb-0 " />
        </div>
      </div>
    </main>
  );
}
