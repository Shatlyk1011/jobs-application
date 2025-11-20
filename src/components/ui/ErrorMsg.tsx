import { FC } from 'react';

interface Props {
  errorMsg?: string
};

const ErrorMsg:FC<Props> = ({ errorMsg }) => {
  if(!errorMsg) return null
  
  return (
    <span className="text-destructive ml-1 text-[13px] leading-[130%] font-normal">{errorMsg}</span>
  )
};
export default ErrorMsg