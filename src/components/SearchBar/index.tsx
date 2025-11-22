import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  value: string;
  setSearch: Dispatch<SetStateAction<string>>;
  classes?: string
}

const SearchBar: FC<Props> = ({ value, setSearch, classes }) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className={cn("mb-4 h-12 w-full", classes)}>
      <label className="relative h-full w-full">
        <input
          type="text"
          placeholder="Поиск"
          value={value}
          onChange={handleInput}
          className="focus:ring-ring bg-popover placeholder:text-sm h-[inherit] w-[inherit] rounded-md pl-10 caret-current ring ring-transparent placeholder:font-[inherit] placeholder:leading-none focus:outline-none"
        />
        <span className="absolute top-[55%] left-4 -translate-y-1/2">
          <SearchIcon className="text-ring h-4 w-4" />
        </span>
      </label>
    </div>
  );
};
export default SearchBar;
