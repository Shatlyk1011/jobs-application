import { FC, useEffect, useState } from "react";
import { Where } from "payload";

import { XIcon } from "lucide-react";

import { FORMAT, LEVEL, LOCATION, PROFESSION } from "../../../../data/filters";
import { MultiSelect } from "@/components/MultiSelect";
import SearchBar from "@/components/SearchBar";

interface Props {
  handleFilterRequest: (query: Where) => void;
  totalDocs: number;
}

const allFilters: Record<string, string> = [...FORMAT, ...LEVEL, ...LOCATION, ...PROFESSION].reduce(
  (acc, { value, label }) => {
    acc[value] = label;
    return acc;
  },
  {} as Record<string, string>,
);

const JobFilters: FC<Props> = ({ handleFilterRequest, totalDocs }) => {
  const [mounted, setMounted] = useState(false);

  const [search, setSearch] = useState('')

  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedFormat, setSelectedFormat] = useState<string[]>([]);

  const selectedOptions = [...selectedProfessions, ...selectedLevels, ...selectedLocation, ...selectedFormat];

  useEffect(() => {
    const query: Where = {
      and: [
        {
          // search
          title: {
            contains: search,
          },
        },
        {
          isVisible: {
            equals: true,
          },
        },
        {
          level: {
            in: selectedLevels,
          },
        },
        {
          location: {
            in: selectedLocation,
          },
        },
        {
          format: {
            in: selectedFormat,
          },
        },
        {
          profession: {
            in: selectedProfessions,
          },
        },
      ],
    };
    // prevent initial fetch
    setMounted(true);
    if (!mounted) return;
    handleFilterRequest(query);
  }, [search, selectedProfessions, selectedLevels, selectedLocation, selectedFormat]);
  return (
    <>
      <section className="mb-4 w-full">
        <div className="test flex max-h-max w-full items-center gap-10">
          <h2 className="-tracking-two self-center max-lg:self-center text-2xl font-semibold text-nowrap">
            Вакансии: <span className="opacity-75">{totalDocs}</span>
          </h2>
          <div className="grid w-full grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-2 gap-3 ">
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
              className="bg-popover hover:bg-secondary max-sm:hidden"
              maxCount={0}
              placeholder="Уровень"
              animation={0}
              options={LEVEL}
              onValueChange={setSelectedLevels}
              defaultValue={selectedLevels}
            />
            <MultiSelect
              singleLine={true}
              className="bg-popover hover:bg-secondary max-sm:hidden"
              maxCount={0}
              placeholder="Локация"
              animation={0}
              options={LOCATION}
              onValueChange={setSelectedLocation}
              defaultValue={selectedLocation}
            />
            <MultiSelect
              singleLine={true}
              className="bg-popover hover:bg-secondary max-sm:hidden"
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
                  <XIcon className="h-4 w-4 text-inherit opacity-80 hover:opacity-100" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
      <SearchBar value={search} setSearch={setSearch} />
    </>
  );
};
export default JobFilters;
