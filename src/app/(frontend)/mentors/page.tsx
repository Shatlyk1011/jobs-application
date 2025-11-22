import MentorSection from "@/components/MentorSection";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";
import Link from "next/link";

export default async function MentorsPage() {
  return (
    <div className="h-[300vh] w-[70%] px-4 pt-14 pb-10 text-center">
      <header className="mb-10 flex justify-center gap-4">
        <Button asChild className="flex-1 px-7 py-4 text-sm" variant="secondary">
          <a href={siteConfig.telegram_support} target="_blank" rel="noopener">
            Подобрать ментора
          </a>
        </Button>
        <Button asChild className="flex-1 px-7 py-4 text-sm">
          <Link href="/mentor/new" target="_blank" rel="noopener">
            Стать ментором
          </Link>
        </Button>
      </header>

      <MentorSection />

      {/* <p className="-tracking-one mx-auto mt-10 max-w-max rounded-xl px-6 py-3 text-lg font-semibold">
        Приглашаем опытных разработчиков к <br /> совместному  сотрудничеству!
      </p> */}
    </div>
  );
}
