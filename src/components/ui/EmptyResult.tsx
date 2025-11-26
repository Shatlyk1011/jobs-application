import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  children: string;
  classes?: string;
}

const EmptyResult: FC<Props> = ({ children, classes }) => {
  return (
    <div className={cn("flex w-full flex-col items-center gap-2 py-10 text-center", classes)}>
      <p className="-tracking-one font-medium">{children}</p>
    </div>
  );
};
export default EmptyResult;
