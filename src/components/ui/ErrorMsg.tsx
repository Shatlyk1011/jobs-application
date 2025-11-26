import { FC } from "react";

interface Props {
  errorMsg?: string;
}

const ErrorMsg: FC<Props> = ({ errorMsg }) => {
  if (!errorMsg) return null;

  console.log('errorMsg', errorMsg.split(' ').slice(1));

  return (
    <>
      <span className="text-destructive ml-1 text-[13px] max-sm:text-[12px] max-sm:line-clamp-1 leading-[130%] max-sm:hidden font-normal">{errorMsg}</span>
      <span className="text-destructive ml-1 text-[13px] max-sm:text-[12px] leading-[130%] font-normal first-letter:uppercase hidden max-sm:inline-block">{errorMsg.split(' ').slice(1).join(' ')}</span>
    </>
  );
};
export default ErrorMsg;
