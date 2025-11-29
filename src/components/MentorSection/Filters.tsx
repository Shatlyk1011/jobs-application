"use client";

import { FC, useEffect, useState } from "react";
import { Where } from "payload";

import { MENTOR_PROFESSION } from "../../../data/mentor";

//components
import { SelectComponent } from "../SelectComponent";
import SearchBar from "../SearchBar";

interface Props {
  handleFilterRequest: (query: Where) => void;
  totalDocs: number;
}

const ALL_PROFESSIONS = "Все направления";

const Filters: FC<Props> = ({ handleFilterRequest, totalDocs }) => {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");

  const [profession, setProfession] = useState(ALL_PROFESSIONS);

  useEffect(() => {
    const query: Where = {
      and: [
        {
          // search
          username: {
            contains: search,
          },
        },
        {
          isVisible: {
            equals: true,
          },
        },
        profession !== ALL_PROFESSIONS
          ? {
              profession: {
                in: profession,
              },
            }
          : {},
      ],
    };
    // prevent initial fetch
    setMounted(true);
    if (!mounted) return;
    console.log("here");
    handleFilterRequest(query);
  }, [search, profession]);

  return (
    <section className="">
      <div className="mb-6 flex items-center justify-between max-sm:mb-4 max-sm:flex-wrap max-sm:gap-y-3">
        <h1 className="text-lg font-medium text-nowrap">
          Менторы <span>{totalDocs}</span>
        </h1>
        <div className="w-full max-w-[220px]">
          <SelectComponent
            placeholder="Профессия"
            items={[{ label: "Все направления", value: "Все направления" }, ...MENTOR_PROFESSION]}
            onChange={(value) => setProfession(value)}
            value={profession}
          />
        </div>
      </div>
      <SearchBar value={search} setSearch={setSearch} classes="h-10" />
    </section>
  );
};
export default Filters;
