"use client";
import { FC, useState } from "react";

import { IResumes } from "@/types/resume";

//components
import CVFilters from "./CVFilters";
import CVCards from "./CVCards";

interface Props {
  initialData: IResumes;
}

const CVSection: FC<Props> = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  return (
    <div>
      <CVFilters />
      {/* <SearchBar /> */}
      <CVCards resumes={data} />
    </div>
  );
};
export default CVSection;
