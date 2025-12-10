import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import { Logo } from "@/components/ui/Logo";

export default function Home() {
  return (
    <main className="bg-primary min-h-svh w-full">
      <div className="mx-auto max-w-5xl">
        <header className="bg-primary py-2">
          <Logo className="mx-auto h-20 w-max text-gray-100" />
        </header>
        <section className="mx-auto mb-16 h-full min-h-[40vw] w-full max-w-5xl justify-center px-12 pt-6 max-lg:px-8 max-sm:px-4 max-sm:pt-2">
          <Hero />
        </section>
        <div className="mx-auto max-w-5xl px-12 pb-5 max-lg:px-8 max-sm:px-4">
          <Footer classes="mb-0 " />
        </div>
      </div>
    </main>
  );
}
