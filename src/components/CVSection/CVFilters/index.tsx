import { FC } from "react";

interface Props {
}

const CVFilters: FC<Props> = () => {

  return (
    <section className="w-full">
      <div className="test flex max-h-max w-full items-center gap-10">
        <h2 className="-tracking-two self-center text-2xl font-semibold text-nowrap">
          Резюме
        </h2>
        {/* <div className="grid w-full grid-cols-4 gap-3">
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
        </div> */}
      </div>
    </section>
  );
};
export default CVFilters;
