import { FC } from "react";

interface Props {}

const CVFilters: FC<Props> = () => {
  return (
    <section className="w-full">
      <div className="test flex max-h-max w-full items-center gap-10">
        <h2 className="-tracking-two self-center text-2xl font-semibold text-nowrap">Резюме</h2>
      </div>
    </section>
  );
};
export default CVFilters;
