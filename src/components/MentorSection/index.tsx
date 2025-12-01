"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { stringify } from "qs-esm";
import { Where } from "payload";

import { IMentor } from "@/types/mentors";
import { DEFAULT_LIMIT } from "@/shared/constant";

import { debounce } from "@/composables/utils";

import useMentors from "@/services/useMentors";

import MentorFilters from "./Filters";
import { Button } from "../ui/button";
import ScreenLoading from "../ui/ScreenLoading";
import EmptyResult from "../ui/EmptyResult";
import { TLanguage } from "../../../data/filters";

// svg flags
import { RussiaFlag } from "../icons/flags/RussiaFlag";
import { TurkmenFlag } from "../icons/flags/TurkmenFlag";
import { USAFlag } from "../icons/flags/USAFlag";
import { Globe, Info } from "lucide-react";

interface Props {
  initialData: IMentor[];
}

const getFlagIcon = (lang: TLanguage) => {
  if (lang === 'Русский') {
    return RussiaFlag
  } else if (lang === 'Туркменский') {
    return TurkmenFlag
  }
  return USAFlag
}

const MentorSection: FC<Props> = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);

  console.log('data', data);

  const { getMentors } = useMentors();

  if (!initialData) return null;

  const fetchMentors = async (query: Where) => {
    const stringifiedQuery = stringify({ where: query, limit: DEFAULT_LIMIT }, { addQueryPrefix: true });

    try {
      setLoading(true);
      const mentors = await getMentors(stringifiedQuery);
      setData(mentors);
    } catch (err) {
      console.log("fetch mentors error", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterRequest = debounce(fetchMentors, data?.length === 0 ? 500 : 1200);

  return (
    <section className="">
      <MentorFilters handleFilterRequest={handleFilterRequest} totalDocs={data?.length} />

      {/* mentor card */}
      <div className="relative flex flex-col gap-5">
        {data.length ? (
          data.map((m) => (
            <Link
              key={m.id}
              href={`/mentors/${m.slug}`}
              className="bg-popover hover:bg-popover/80 flex w-full items-start gap-5 rounded-xl p-5 pb-6 shadow-xl/2 transition max-sm:flex-col max-sm:gap-3 max-sm:p-4 max-sm:pb-6"
            >
              {/* left */}
              <div className="max-sm:flex gap-4 ">
                <figure className="min-h-14 min-w-14">
                  <img src={m.imageBase64} alt="profile image" className="h-14 w-14 rounded-[18px] object-cover" />
                </figure>

                <ul className="flex gap-x-1 mt-1 w-full flex-wrap mb-4">
                  <li className="text-[12px] basis-full text-start font-semibold -tracking-one flex items-center gap-1">
                    <span className="opacity-70">Языки</span>
                    <button className="relative group "><Info className="w-2.5 h-2.5 max-sm:w-3 max-sm:h-3" /> <p className="absolute min-w-[180px] top-4 left-[-90px] opacity-0 invisible select-none transition group-hover:opacity-100 group-hover:visible group-hover:select-auto text-[12px] bg-secondary px-2 py-1 rounded-lg">Языки проведения онлайн сессии</p></button>
                  </li>
                  {m.language.map((lang) => {
                    const Icon = getFlagIcon(lang)
                    return (
                      <li className="flex items-center" key={lang}>
                        <Icon className="w-4 h-4 leading-0" />
                      </li>
                    )
                  })}
                  <li className="">
                    <USAFlag className="w-4 h-4 leading-0 flex items-center" />
                  </li>
                </ul>
              </div>

              {/* right */}
              <div className="text-start">
                <h3 className="-tracking-two mb-0 text-lg max-sm:mb-2">{m.username}</h3>
                <ul className="flex gap-2 text-[13px] mt-1 mb-4">
                  {m.profession.map((prof) => (
                    <li className="px-2 rounded-full bg-secondary" key={prof}>{prof}</li>
                  ))}
                </ul>
                <h4 className="-tracking-two mb-2 text-sm max-sm:mb-3">{m.position}</h4>

                <p className="tracking-one mb-6 text-sm opacity-80 max-sm:mb-4">{m.about}</p>

                <div className="flex items-center gap-4 text-sm max-lg:flex-col max-sm:gap-3 ">
                  <Button variant="outline" className=" max-lg:min-w-full text-[15px]" size="sm">
                    Смотреть профиль
                  </Button>

                  <p className="-tracking-two text-sm font-medium max-sm:text-center text-[15px]">
                    {m.price}TMT / час онлайн занятия
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <EmptyResult classes="max-w-1/2 mx-auto">
            По Вашему запросу никого не найдено. Попробуйте изменить фильтры поиска.
          </EmptyResult>
        )}
        {isLoading && <ScreenLoading style={{ minHeight: "320px" }} />}
      </div>
    </section>
  );
};
export default MentorSection;
