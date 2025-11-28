import { FC } from "react";
import { getLocation, salaryConvert } from "@/composables/salaryConvert";
import { Coins, MapPin, StarIcon } from "lucide-react";
import CurrencyIcon from "@/components/ui/currency-icon";
import { IResumes } from "@/types/resume";

interface Props {
  resumes: IResumes;
}

const CVCards: FC<Props> = ({ resumes }) => {
  return (
    <section className="grid grid-cols-3 gap-5 pt-6 pb-20 max-sm:pb-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {/* card */}
      {resumes.docs.map((resume) => (
        <a
          key={resume.id}
          href={resume.resumeLink}
          target="_blank"
          rel="noopener"
          className="bg-popover inline-block min-h-[280px] max-sm:min-h-[200px] rounded-2xl p-5"
        >
          <div className="flex h-full flex-col justify-between">
            <div className="flex justify-between">
              <div className="flex flex-col gap-2.5">
                <h3 className="text-xl font-semibold ">{resume.username}</h3>
                <span className="text-base opacity-80">{resume.profession}</span>
              </div>

              {/* <figure className="h-12 w-12 rounded-full bg-red-900">
                <img src="#" alt="" className="h-full w-full rounded-full object-cover" />
              </figure> */}
            </div>

            <ul className="text-secondary-foreground flex flex-wrap gap-1.5 text-[14px] leading-[1.3] font-medium">
              <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
                <StarIcon className="h-4 w-4 opacity-60" />
                <span>{resume.level}</span>
              </li>
              <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
                <MapPin className="h-4 w-4 opacity-60" />
                <div className="first-letter:uppercase">
                  {getLocation(resume.location)} <span className="lowercase">{resume.format}</span>
                </div>
              </li>
              <li className="bg-secondary flex max-w-max items-center gap-1.5 rounded-full px-3 py-1.5">
                <Coins className="h-4 w-4 opacity-60" />
                <span className="flex items-center">
                  {salaryConvert(resume.salary?.from, resume.salary?.to)}
                  <CurrencyIcon
                    currency={resume.salary?.currency}
                    isAvailable={!!resume.salary?.from || !!resume.salary?.to}
                  />
                </span>
              </li>
            </ul>
          </div>
        </a>
      ))}
    </section>
  );
};
export default CVCards;
