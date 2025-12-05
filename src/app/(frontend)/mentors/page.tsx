import Link from "next/link";
import { stringify } from "qs-esm";
import { Metadata } from "next";

import { DEFAULT_LIMIT } from "@/shared/constant";

import { constructMetadata } from "@/lib/utils";

import { siteConfig } from "@/config";

//components
import MentorSection from "@/components/MentorSection";
import { Button } from "@/components/ui/button";
import useMentors from "@/services/useMentors";
import { useTheme } from "next-themes";
import ImageSample from "./ImageSample";

export const revalidate = 1800;

export const metadata: Metadata = constructMetadata({
  title: "Ganat - Менторы",
  description:
    "Развивайтесь с профессионалами: от junior-разработчика до senior-специалиста. Разместите запрос или станьте ментором — помогайте другим расти!",
});

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
  // const { getMentors } = useMentors();

  // const mentors = await getMentors(stringifiedQuery);

  return (
    <div className="h-full w-[70%] px-4 pt-14 pb-10 text-center max-md:w-full max-md:px-0 max-md:pt-8 max-sm:pt-22">
      {/* <header className="mb-10 flex justify-center gap-4 max-md:gap-3 max-md:pl-6 max-sm:mb-6 max-sm:ml-auto max-sm:max-w-full max-sm:flex-col max-sm:pl-0"> */}
      {/* <Button asChild className="flex-1 px-7 py-4 text-sm max-md:order-2 max-sm:py-2.5" variant="secondary">
          <a href={siteConfig.telegram_support} target="_blank" rel="noopener">
            Подобрать ментора
          </a>
        </Button> */}
      {/* <Button asChild className="flex-1 px-7 py-4 text-sm max-sm:py-2.5">
          <Link href="/mentor/new" target="_blank" rel="noopener">
            Стать ментором
          </Link>
        </Button> */}
      {/* </header> */}

      {/* <MentorSection initialData={mentors} /> */}

      <h1 className="-tracking-one mx-auto mb-4 w-full max-w-max rounded-xl text-center text-2xl font-semibold max-sm:mb-2 max-sm:text-xl">
        Станьте ментором на нашей платформе!
      </h1>
      <p className="mx-4 text-sm opacity-80">
        {" "}
        Мы ищем опытных разработчиков, готовых делиться знаниями <br className="max-md:hidden" /> и помогать другим
        расти. Мы поможем с организацией, тех-поддержской и с{" "}
        <b>
          получением оплаты в размере 100% <br className="max-md:hidden" />
        </b>{" "}
        от стоимости сессии.
      </p>

      <div className="mx-6 mt-3">
        <Button asChild className="flex-1 px-7 py-4 text-sm max-sm:py-2.5" size="sm">
          <Link href="/mentor/new" target="_blank" rel="noopener">
            Стать ментором
          </Link>
        </Button>
      </div>
      <ImageSample />
    </div>
  );
}
