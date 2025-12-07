import { DollarSign, Euro, RussianRuble } from "lucide-react";
import { TCurrency } from "../../data/filters";

export function salaryConvert(from?: string, to?: string) {
  if (from && !to) return `from ${from}`;
  if (!from && to) return `to ${to}`;
  if (from && to) return `from ${from} to ${to}`;
  return "Not specified";
}

export function getCurrencyIcon(currency: TCurrency): string | typeof DollarSign {
  if (currency === "TMT") {
    return currency;
  }
  return CURRENCY_ICON[currency];
}

export const CURRENCY_ICON = {
  TMT: "tmt",
  USD: DollarSign,
  RUB: RussianRuble,
  EURO: Euro,
};

export const getLocation = (location: string) => {
  if (location.toLowerCase() === "abroad") {
    return "";
  }

  return location + ", ";
};
