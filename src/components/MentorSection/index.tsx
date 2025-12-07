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
import { DollarSign, Globe, Info } from "lucide-react";

interface Props {
  initialData: IMentor[];
}

const getFlagIcon = (lang: TLanguage) => {
  if (lang === "Russian") {
    return RussiaFlag;
  } else if (lang === "Turkmen") {
    return TurkmenFlag;
  }
  return USAFlag;
};

const MentorSection: FC<Props> = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);

  console.log("data", data);

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

  const handleFilterRequest = debounce(fetchMentors, 1500);

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
              <div className="gap-4 max-sm:flex">
                <figure className="min-h-14 min-w-14">
                  <img src={m.imageBase64} alt="profile image" className="h-14 w-14 rounded-[18px] object-cover" />
                </figure>

                <ul className="mt-1 mb-4 flex w-full flex-wrap gap-x-1">
                  <li className="-tracking-one flex basis-full items-center gap-1 text-start text-[12px] font-semibold">
                    <span className="opacity-70">Languages</span>
                    <button className="group relative">
                      <Info className="h-2.5 w-2.5 max-sm:h-3 max-sm:w-3" />{" "}
                      <p className="bg-secondary invisible absolute top-4 left-[-90px] min-w-[180px] rounded-lg px-2 py-1 text-[12px] opacity-0 transition select-none group-hover:visible group-hover:opacity-100 group-hover:select-auto">
                        Languages ​​of the online session
                      </p>
                    </button>
                  </li>
                  {m.language.map((lang) => {
                    const Icon = getFlagIcon(lang);
                    return (
                      <li className="flex items-center" key={lang}>
                        <Icon className="h-4 w-4 leading-0" />
                      </li>
                    );
                  })}
                  <li className="">
                    <USAFlag className="flex h-4 w-4 items-center leading-0" />
                  </li>
                </ul>
              </div>

              {/* right */}
              <div className="text-start">
                <h3 className="-tracking-two mb-0 text-lg max-sm:mb-2">{m.username}</h3>
                <ul className="mt-1 mb-4 flex gap-2 text-[13px]">
                  {m.profession.map((prof) => (
                    <li className="bg-secondary rounded-full px-2" key={prof}>
                      {prof}
                    </li>
                  ))}
                </ul>
                <h4 className="-tracking-two mb-2 text-sm max-sm:mb-3">{m.position}</h4>

                <p className="tracking-one mb-6 text-sm opacity-80 max-sm:mb-4">{m.about}</p>

                <div className="flex items-center gap-4 text-sm max-lg:flex-col max-sm:gap-3">
                  <Button variant="outline" className="text-[15px] max-lg:min-w-full" size="sm">
                    View profile
                  </Button>

                  <p className="-tracking-two text-sm text-[15px] font-medium max-sm:text-center">
                    {m.price}
                    <DollarSign /> / an hour of online classes
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <EmptyResult classes="max-w-1/2 mx-auto">
            No results were found matching your search criteria. Try adjusting your search filters.
          </EmptyResult>
        )}
        {isLoading && <ScreenLoading style={{ minHeight: "320px" }} />}
      </div>
    </section>
  );
};
export default MentorSection;
