import { Input } from "@/components/ui/input";
import { FC } from "react";
import ErrorMsg from "./ErrorMsg";

interface Props extends React.ComponentProps<"input"> {
  errorMsg?: string;
  as?: "input" | "textarea";
}

const CustomInput: FC<Props> = ({ errorMsg, ...rest }) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <Input autoComplete="off" {...rest} />
      <ErrorMsg errorMsg={errorMsg} />
    </div>
  );
};
export default CustomInput;
