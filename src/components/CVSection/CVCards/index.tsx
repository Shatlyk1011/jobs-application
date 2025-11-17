import { FC } from "react";
import { salaryConvert } from "@/composables/salaryConvert";
import { Coins, MapPin, StarIcon } from "lucide-react";
import CurrencyIcon from "@/components/ui/currency-icon";
import Link from "next/link";
import { IResumes } from "@/types/resume";

interface Props {
  resumes: IResumes;
}

const CVCards: FC<Props> = ({ resumes }) => {
  return (
    <section className="grid grid-cols-3 gap-5 pt-6 pb-20">
      {/* card */}
      {resumes.docs.map((resume) => (
        <Link
          key={resume.id}
          href={resume.resumeLink}
          className="bg-popover inline-block min-h-[280px] rounded-2xl p-5"
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg font-semibold">{resume.username}</h3>
                <span className="text-sm opacity-80">{resume.profession}</span>
              </div>

              {/* <figure className="h-12 w-12 rounded-full bg-red-900">
                <img src="#" alt="" className="h-full w-full rounded-full object-cover" />
              </figure> */}
            </div>

            <ul className="text-secondary-foreground flex flex-wrap gap-1.5 text-sm leading-[1.3] font-medium">
              <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
                <StarIcon className="h-4 w-4 opacity-60" />
                <span>{resume.level}</span>
              </li>
              <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
                <MapPin className="h-4 w-4 opacity-60" />
                <span>{resume.location}</span>
              </li>
              <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
                <Coins className="h-4 w-4 opacity-60" />
                <span className="flex items-center">
                  {salaryConvert(resume.salary?.from, resume.salary?.to)}
                  {/* @ts-ignore */}
                  <CurrencyIcon
                    currency={resume.salary?.currency}
                    isAvailable={!!resume.salary?.from && !!resume.salary?.to}
                  />
                </span>
              </li>
            </ul>
          </div>
        </Link>
      ))}
    </section>
  );
};
export default CVCards;
