import { FC } from "react";

interface Props {}

const CVFilters: FC<Props> = () => {
  return (
    <section className="w-full">
      <div className="flex max-h-max w-full items-center gap-10">
        <h2 className="-tracking-two self-center text-2xl font-semibold text-nowrap">Таланты</h2>
      </div>
    </section>
  );
};
export default CVFilters;
