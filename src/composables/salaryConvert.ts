import { DollarSign, Euro, RussianRuble } from "lucide-react";
import { TCurrency } from "../../data/filters";

export function salaryConvert(from?: string, to?: string) {
    if (from && !to) return `до ${from}`;
    if (!from && to) return `от ${to}`;
    if (from && to) return `до ${from} от ${to}`;
    return 'З/П не указано'
}

export function getCurrencyIcon(currency: TCurrency): string | typeof DollarSign {
  if(currency === 'TMT') {
    return currency
  }
  return CURRENCY_ICON[currency]
}
 
export const CURRENCY_ICON = {
  'TMT' : 'tmt',
  'USD' : DollarSign,
  'RUB' : RussianRuble,
  'EURO' : Euro,
}