import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  items: { label: string; value: string }[];
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  errorMsg?: string
  classes?: string;
}

export function SelectComponent({ items, placeholder, onChange, value, errorMsg, classes }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <Select onValueChange={(value) => onChange(value)} value={value}>
        <SelectTrigger className={cn("w-full", classes)}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="flex">
          <SelectGroup>
            {items?.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>

        </SelectContent>
      </Select>
      {errorMsg && <span className="text-[13px] ml-1 leading-[130%] font-normal text-destructive">{errorMsg}</span>}
    </div>
  );
}
