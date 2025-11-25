import { CircleCheck } from "lucide-react";
import { FC } from "react";

interface Props {}

const SuccessBlock: FC<Props> = () => {
  return (
    <div className="text-center">
      <div className="p-6 text-center">
        <CircleCheck className="inline-block h-16 w-16 text-green-600" />
        <h6 className="-tracking-three mt-3 mb-1 text-lg font-semibold">Ваш запрос отправлен</h6>
        <p className="-tracking-one text-sm opacity-60">Мы свяжемся с Вами в ближайшее время</p>
      </div>
    </div>
  );
};
export default SuccessBlock;
