"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { stringify } from "qs-esm";
import { Where } from "payload";

import { IMentor } from "@/types/mentors";

import { debounce } from "@/composables/utils";

import useMentors from "@/services/useMentors";

import MentorFilters from "./Filters";
import { Button } from "../ui/button";
import ScreenLoading from "../ui/ScreenLoading";
import EmptyResult from "../ui/EmptyResult";

interface Props {
  initialData: IMentor[];
}

const MentorSection: FC<Props> = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);

  const { getMentors } = useMentors();

  if (!initialData) return null;

  const fetchMentors = async (query: Where) => {
    const stringifiedQuery = stringify(
      { where: query },
      { addQueryPrefix: true }
    );

    try {
      setLoading(true)
      const mentors = await getMentors(stringifiedQuery);
      setData(mentors);
    } catch (err) {
      console.log('fetch mentors error', err);

    } finally {
      setLoading(false)
    }
  };

  const handleFilterRequest = debounce(fetchMentors, data?.length === 0 ? 500 : 1200);

  return (
    <section className="">
      <MentorFilters handleFilterRequest={handleFilterRequest} totalDocs={data?.length} />

      {/* mentor card */}
      <div className="flex flex-col gap-5 relative">
        {!data.length ? (
          data.map((m) => (
          <Link
            key={m.id}
            href={`/mentors/${m.slug}`}
            className="bg-popover hover:bg-popover/80 flex w-full items-start gap-5 rounded-xl p-5 pb-6 shadow-xl/2 transition"
          >
            {/* left */}
            <figure className="min-h-14 min-w-14">
              <img src={m.imageBase64} alt="profile image" className="h-14 w-14 rounded-[18px] object-cover" />
            </figure>

            {/* right */}
            <div className="text-start">
              <h3 className="-tracking-two mb-3 text-lg">{m.username}</h3>
              <h4 className="-tracking-two mb-5 text-sm">{m.position}</h4>

              <p className="tracking-one mb-6 text-sm opacity-80">{m.about}</p>

              <div className="flex items-center gap-4 text-sm">
                <Button variant="outline" className="text-sm" size="sm">
                  Смотреть профиль
                </Button>

                <p className="-tracking-two text-sm text-[15px] font-medium">{m.price}TMT / час онлайн занятия</p>
              </div>
            </div>
          </Link>
          ))
        ) : (
          <EmptyResult classes="max-w-1/2 mx-auto">
            По вашему запросу никого не найдено. Попробуйте изменить фильтры поиска.
          </EmptyResult>
        )}
        {isLoading && (
          <ScreenLoading style={{ minHeight: "320px" }} />
        )}
      </div>


    </section>
  );
};
export default MentorSection;
