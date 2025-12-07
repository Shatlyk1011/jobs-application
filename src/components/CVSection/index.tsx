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
        <p className="-tracking-two bg-popover/70 mx-auto max-w-md rounded-2xl px-7 py-5 text-center text-base leading-[1.3] font-medium max-lg:max-w-[80%] max-lg:text-sm max-sm:px-4 max-sm:py-4">
          It only takes 3 minutes. Fill out your resume, and we'll post it on our platform.
        </p>
      )}
      {/* <SearchBar /> */}
      <CVCards resumes={initialData} />
    </div>
  );
};
export default CVSection;
