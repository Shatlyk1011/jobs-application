"use client";
import { FC, useState } from "react";
import { MultiSelect } from "../MultiSelect";
import { FORMAT, LEVEL, LOCATION, PROFESSION } from "../../../data/filters";
import { XIcon } from "lucide-react";

interface Props {}

const allFilters: Record<string, string> = [...FORMAT, ...LEVEL, ...LOCATION, ...PROFESSION].reduce(
  (acc, { value, label }) => {
    acc[value] = label;
    return acc;
  },
  {} as Record<string, string>,
);

console.log("allFilters", allFilters);

const VacancyFilters: FC<Props> = () => {
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedFormat, setSelectedFormat] = useState<string[]>([]);

  const selectedOptions = [...selectedProfessions, ...selectedLevels, ...selectedLocation, ...selectedFormat];

  return (
    <div className="w-full">
      <div className="test flex max-h-max w-full items-center gap-10">
        <h2 className="-tracking-two self-center text-2xl font-semibold text-nowrap">
          Вакансии: <span className="opacity-75">662</span>
        </h2>
        <div className="grid w-full grid-cols-4 gap-3">
          <MultiSelect
            singleLine={true}
            className="bg-popover hover:bg-secondary"
            maxCount={0}
            placeholder="Профессия"
            animation={0}
            options={PROFESSION}
            onValueChange={setSelectedProfessions}
            defaultValue={selectedProfessions}
          />
          <MultiSelect
            singleLine={true}
            className="bg-popover hover:bg-secondary"
            maxCount={0}
            placeholder="Уровень"
            animation={0}
            options={LEVEL}
            onValueChange={setSelectedLevels}
            defaultValue={selectedLevels}
          />
          <MultiSelect
            singleLine={true}
            className="bg-popover hover:bg-secondary"
            maxCount={0}
            placeholder="Локация"
            animation={0}
            options={LOCATION}
            onValueChange={setSelectedLocation}
            defaultValue={selectedLocation}
          />
          <MultiSelect
            singleLine={true}
            className="bg-popover hover:bg-secondary"
            maxCount={0}
            placeholder="Формат"
            animation={0}
            options={FORMAT}
            onValueChange={setSelectedFormat}
            defaultValue={selectedFormat}
          />
        </div>
      </div>
      {/* all selected filters */}
      {!!selectedOptions.length && (
        <ul className="mt-5 flex flex-wrap gap-3">
          {selectedOptions.map((o) => (
            <li
              className="bg-secondary-foreground text-secondary flex items-center gap-1 rounded-full px-3 pt-2 pb-1.5 text-sm font-medium"
              key={o}
            >
              <span className="mb-0.5 leading-[100%] text-nowrap">{allFilters[o]}</span>
              <button className="leading-0">
                <XIcon className="h-3 w-3 text-inherit opacity-80 hover:opacity-100" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default VacancyFilters;
