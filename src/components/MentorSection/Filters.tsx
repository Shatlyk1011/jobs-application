"use client";

import { FC, useState } from "react";
import { Where } from "payload";

import { MENTOR_PROFESSION } from "../../../data/mentor";

//components
import { SelectComponent } from "../SelectComponent";
import SearchBar from "../SearchBar";

interface Props {
  handleFilterRequest: (query: Where) => void;

}

const Filters: FC<Props> = () => {
  const [profession, setProfession] = useState("Все направления");
  const [search, setSearch] = useState("");

  return (
    <section className="">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium text-nowrap">
          Менторы <span>44</span>
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
