import Link from "next/link";

export default async function MentorsPage() {
  return (
    <main className="w-full text-center">
      <p className="-tracking-one mx-auto mt-10 max-w-max rounded-xl px-6 py-3 text-xl font-semibold">
        Этот раздел в процессе разработки
      </p>
      <Link className="bg-primary my-4 inline-block rounded-full px-5 py-2 text-white" href="/mentor/new" target="_blank" rel="noopener">
        Стать ментором
      </Link>
    </main>
  );
}
