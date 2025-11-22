import MentorSection from "@/components/MentorSection";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";
import Link from "next/link";

export default async function MentorsPage() {
  return (
    <div className="text-center w-[70%] h-[300vh] pb-10 pt-14 px-4">
      <header className="flex gap-4 justify-center mb-10">
        <Button asChild className='text-sm py-4 px-7 flex-1' variant="secondary">
          <a href={siteConfig.telegram_support} target='_blank' rel="noopener">Подобрать ментора</a>
        </Button>
        <Button asChild className='text-sm py-4 px-7 flex-1'>
          <Link
            href="/mentor/new"
            target="_blank"
            rel="noopener"
          >
            Стать ментором
          </Link>
        </Button>
      </header>

      <MentorSection/>


       {/* <p className="-tracking-one mx-auto mt-10 max-w-max rounded-xl px-6 py-3 text-lg font-semibold">
        Приглашаем опытных разработчиков к <br /> совместному  сотрудничеству!
      </p> */}
    </div>
  );
}
