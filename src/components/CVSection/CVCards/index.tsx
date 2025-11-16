import { salaryConvert } from "@/composables/salaryConvert";
import { Coins, MapPin, StarIcon } from "lucide-react";
import CurrencyIcon from "@/components/ui/currency-icon";
import Link from "next/link";
import { FC } from "react";

interface Props {}

const test = {
  name: "Виктор Иванов",
  role: "Frontend Developer",
  img: "",
  level: "Middle",
  location: "Ashgabat",
  format: 'on-site',
  salary: { from: "100", to: "200", currency: "TMT" },
  resumeUrl: "",
};

const CVCards: FC<Props> = () => {
  return (
    <section className="grid grid-cols-3 gap-5 pt-6 pb-20">
      {/* card */}
      <Link href={"#"} className="bg-popover inline-block min-h-[280px] rounded-2xl p-5">
        <div className="flex h-full flex-col justify-between">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2.5">
              <h3 className="text-lg font-semibold">{test.name}</h3>
              <span className="text-sm opacity-80">{test.role}</span>
            </div>

            {/* <figure className="h-12 w-12 rounded-full bg-red-900">
              <img src="#" alt="" className="h-full w-full rounded-full object-cover" />
            </figure> */}
          </div>

          <ul className="text-secondary-foreground flex flex-wrap gap-1.5 text-sm leading-[1.3] font-medium">
            <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
              <StarIcon className="h-4 w-4 opacity-60" />
              <span>{test.level}</span>
            </li>
            <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
              <MapPin className="h-4 w-4 opacity-60" />
              <span>{test.location}</span>
            </li>
            <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
              <Coins className="h-4 w-4 opacity-60" />
              <span className="flex items-center">
                {salaryConvert(test.salary.from, test.salary.to)}
                {/* @ts-ignore */}
                <CurrencyIcon currency={test.salary.currency} isAvailable={!!test.salary.from && !!test.salary.to} />
              </span>
            </li>
          </ul>
        </div>
      </Link>
    </section>
  );
};
export default CVCards;
