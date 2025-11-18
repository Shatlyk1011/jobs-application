import { FC } from "react";
import { TCurrency } from "../../../data/filters";
import { getCurrencyIcon } from "@/composables/salaryConvert";

interface Props {
  currency?: TCurrency;
  isAvailable: boolean;
}

const CurrencyIcon: FC<Props> = ({ currency, isAvailable }) => {
  if (!currency || !isAvailable) return null;

  const Icon = getCurrencyIcon(currency);

  if (typeof Icon === "string") {
    return <span>&nbsp;{Icon}</span>; // Wrap string in a span for rendering
  }
  return <Icon className="h-4 w-4" />;
};
export default CurrencyIcon;
