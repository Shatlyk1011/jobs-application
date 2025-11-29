import Link from "next/link";
import { stringify } from "qs-esm";

import { DEFAULT_LIMIT } from "@/shared/constant";

import { siteConfig } from "@/config";

//components
import MentorSection from "@/components/MentorSection";
import { Button } from "@/components/ui/button";
import useMentors from "@/services/useMentors";

const stringifiedQuery = stringify(
  {
    where: {
      isVisible: {
        equals: true,
      },
    },
    limit: DEFAULT_LIMIT,
  },
  { addQueryPrefix: true },
);

export default async function MentorsPage() {
  const { getMentors } = useMentors();

  const mentors = await getMentors(stringifiedQuery);

  return (
    <div className="h-full w-[70%] px-4 pt-14 pb-10 text-center max-md:w-full max-md:px-0 max-md:pt-8 max-sm:pt-22">
      <header className="mb-10 flex justify-center gap-4 max-md:gap-3 max-md:pl-6 max-sm:mb-6 max-sm:ml-auto max-sm:max-w-full max-sm:flex-col max-sm:pl-0">
        <Button asChild className="flex-1 px-7 py-4 text-sm max-md:order-2 max-sm:py-2.5" variant="secondary">
          <a href={siteConfig.telegram_support} target="_blank" rel="noopener">
            Подобрать ментора
          </a>
        </Button>
        <Button asChild className="flex-1 px-7 py-4 text-sm max-sm:py-2.5">
          <Link href="/mentor/new" target="_blank" rel="noopener">
            Стать ментором
          </Link>
        </Button>
      </header>

      <MentorSection initialData={mentors} />

      {/* <p className="-tracking-one mx-auto mt-10 max-w-max rounded-xl px-6 py-3 text-lg font-semibold">
        Приглашаем опытных разработчиков к <br /> совместному  сотрудничеству!
      </p> */}
    </div>
  );
}
