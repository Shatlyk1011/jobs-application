
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface Props {
  items: {label: string, value: string}[]
  placeholder: string
  classes?:string
}

export function SelectComponent({ items, placeholder, classes }:Props) {
  return (
    <Select>
      <SelectTrigger className={cn("w-full", classes)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items?.map(({label, value}) => (
            <SelectItem key={value} value={value}>{label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
