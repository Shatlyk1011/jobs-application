import { Input } from "@/components/ui/input";
import { FC } from "react";

interface Props extends React.ComponentProps<"input"> {
  errorMsg?: string;
    as?: 'input' | 'textarea'

}

const CustomInput: FC<Props> = ({ errorMsg, ...rest }) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <Input autoComplete="off" {...rest} />
      {errorMsg && <span className="text-destructive ml-1 text-[13px] leading-[130%] font-normal">{errorMsg}</span>}
    </div>
  );
};
export default CustomInput;
