import { Input } from '@/components/ui/input';
import { FC } from 'react';

interface Props extends React.ComponentProps<"input"> {
  errorMsg?:string
};

const CustomInput:FC<Props> = ({errorMsg, ...rest}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <Input autoComplete="off" {...rest}/>
      {errorMsg && <span className="text-[13px] ml-1 leading-[130%] font-normal text-destructive">{errorMsg}</span>}
    </div>
  )
};
  export default CustomInput