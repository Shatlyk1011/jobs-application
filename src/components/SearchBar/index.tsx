import { FC } from "react";
import { SearchIcon } from "lucide-react";

interface Props {}

const SearchBar: FC<Props> = () => {
  return (
    <div className="h-12 w-full mb-4">
      <label className="relative h-full w-full">
        <input
          type="text"
          placeholder="Поиск"
          className="focus:ring-ring bg-popover h-[inherit] w-[inherit] rounded-md pl-10 caret-current ring ring-transparent placeholder:font-[inherit] placeholder:leading-none focus:outline-none"
        />
        <span className="absolute top-[55%] left-4 -translate-y-1/2">
          <SearchIcon className="text-ring h-4 w-4" />
        </span>
      </label>
    </div>
  );
};
export default SearchBar;
