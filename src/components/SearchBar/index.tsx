import { FC } from "react";
import { SearchIcon } from "lucide-react";

interface Props {}

const SearchBar: FC<Props> = () => {
  return (
    <div className="w-full h-12 mt-4">
      <label className="relative w-full h-full">
        <input
          type="text"
          placeholder="Поиск"
          className="h-[inherit] placeholder:font-[inherit] w-[inherit] pl-10 focus:outline-none focus:ring-ring bg-popover placeholder:leading-none caret-current ring ring-transparent rounded-md"
        />
        <span className="absolute top-[55%] -translate-y-1/2 left-4 ">
          <SearchIcon className="w-4 h-4 text-ring" />
        </span>
      </label>
    </div>
  );
};
export default SearchBar;
