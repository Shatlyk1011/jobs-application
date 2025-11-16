"use client";
import { FC } from "react";

//components
import CVFilters from "./CVFilters";
import CVCards from "./CVCards";

interface Props {}

const CVSection: FC<Props> = ({}) => {
  return (
    <div>
      <CVFilters />
      {/* <SearchBar /> */}
      <CVCards />
    </div>
  );
};
export default CVSection;
