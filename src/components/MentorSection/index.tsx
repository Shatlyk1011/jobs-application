"use client";
import { FC, useState } from "react";
import Link from "next/link";

import { IMentor } from "@/types/mentors";

import MentorFilters from "./Filters";
import { Button } from "../ui/button";
import { Where } from "payload";
import { stringify } from "qs-esm";
import { debounce } from "@/composables/utils";
import useMentors from "@/services/useMentors";

interface Props {
  initialData: IMentor[];
}

const MentorSection: FC<Props> = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  const { getMentors } = useMentors()

  if (!initialData) return null;

  const fetchJobs = async (query: Where) => {
    const stringifiedQuery = stringify(
      {
        where: query,
      },
      { addQueryPrefix: true },
    );

    const mentors = await getMentors(stringifiedQuery);
    setData(mentors);
  };

  const handleFilterRequest = debounce(fetchJobs, 800);

  return (
    <section className="">
      <MentorFilters handleFilterRequest={handleFilterRequest} />

      {/* mentor card */}
      <div className="flex flex-col gap-5">
        {data.map((m) => (
          <Link
            key={m.id}
            href={`/mentors/${m.slug}`}
            className="bg-popover hover:bg-popover/80 flex w-full items-start gap-5 rounded-xl p-5 pb-6 shadow-xl/2 transition"
          >
            {/* left */}
            <figure className="min-h-14 min-w-14">
              <img src={m.imageUrl} alt="profile image" className="h-14 w-14 rounded-[18px] object-cover" />
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

                <p className="-tracking-two text-sm font-medium text-[15px]">{m.price}TMT / час онлайн занятия</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default MentorSection;
