import { FC } from "react";

interface Props {
  errorMsg?: string;
}

const ErrorMsg: FC<Props> = ({ errorMsg }) => {
  if (!errorMsg) return null;

  console.log("errorMsg", errorMsg.split(" ").slice(1));

  return (
    <>
      <span className="text-destructive ml-1 text-[13px] leading-[130%] font-normal max-sm:line-clamp-1 max-sm:hidden max-sm:text-[12px]">
        {errorMsg}
      </span>
      <span className="text-destructive ml-1 hidden text-[13px] leading-[130%] font-normal first-letter:uppercase max-sm:inline-block max-sm:text-[12px]">
        {errorMsg.split(" ").slice(1).join(" ")}
      </span>
    </>
  );
};
export default ErrorMsg;
