import { FC } from "react";
import Link from "next/link";

import Filters from "./Filters";
import { Button } from "../ui/button";

interface Props {}

const MentorSection: FC<Props> = () => {
  return (
    <section className="">
      <Filters />

      {/* mentor card */}
      <Link
        href={`/mentors/${"amanov-aman"}`}
        className="bg-popover hover:bg-popover/80 flex w-full items-start gap-5 rounded-xl p-5 pb-6 shadow-xl/2 transition"
      >
        {/* left */}
        <figure className="min-h-14 min-w-14">
          <img
            src="https://cdn.prod.website-files.com/63b754bfedfa853c38da34fd/660bdb422da58631b9220e9d_PicRetouch_20240207_134501259.png"
            alt="profile image"
            className="h-14 w-14 rounded-[18px] object-cover"
          />
        </figure>

        {/* right */}
        <div className="text-start">
          <h3 className="-tracking-two mb-3 text-lg">Аманов Аман</h3>
          <h4 className="-tracking-two mb-5 text-sm">Backend Developer at SpaceX</h4>

          <p className="tracking-one mb-6 text-sm opacity-80">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum fugit dolorem quo similique neque magni
            omnis qui placeat vitae animi numquam natus, error quas totam vero debitis voluptatem accusamus eum?
          </p>

          <div className="flex items-center gap-4 text-sm">
            <Button variant="outline" className="text-[14px]" size="sm">
              Смотреть профиль
            </Button>

            <p className="-tracking-three text-[14px] font-medium">200TMT / час занятия в ZOOM</p>
          </div>
        </div>
      </Link>
    </section>
  );
};
export default MentorSection;
