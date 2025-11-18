import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-primary min-h-svh w-screen">
      <section className="flex h-full w-full justify-center px-5 pt-25">
        <Hero />
      </section>
    </main>
  );
}
