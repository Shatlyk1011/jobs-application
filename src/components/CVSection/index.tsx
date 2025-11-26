import { FC } from "react";

import { IResumes } from "@/types/resume";

//components
import CVFilters from "./CVFilters";
import CVCards from "./CVCards";

interface Props {
  initialData: IResumes;
}

const CVSection: FC<Props> = ({ initialData }) => {

  return (
    <div>
      {initialData.docs.length !== 0 ? (
        <CVFilters />
      ) : (
        <p className="text-center text-lg max-w-[680px] max-lg:text-base max-lg:max-w-[80%] max-sm:max-w-full max-sm:px-4 max-sm:py-4 font-medium -tracking-two px-7 mx-auto leading-[1.3] py-5 bg-popover rounded-2xl">Это займет всего 3 минуты. Заполните Ваше резюме, и мы выставим его на нашей платформе.</p>
      )}
      {/* <SearchBar /> */}
      <CVCards resumes={initialData} />
    </div>
  );
};
export default CVSection;
