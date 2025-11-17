import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  items: { label: string; value: string }[];
  placeholder: string;
  onChange: (value: string) => void
  value: string
  classes?: string;
}

export function SelectComponent({ items, placeholder, onChange, value, classes }: Props) {
  return (
    <Select onValueChange={(value) => onChange(value)} value={value}>
      <SelectTrigger className={cn("w-full", classes)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items?.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
