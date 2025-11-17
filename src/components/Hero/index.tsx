"use client";

import Link from "next/link";
import { WobbleCard } from "../ui/wobble-card";

export default function Hero() {
  return (
    <div className="mx-auto grid h-max w-full max-w-5xl grid-cols-2 gap-4.5">
      <Link href={"/jobs"}>
        <WobbleCard containerClassName=" h-full bg-card text-card-foreground min-h-[220px]" className="">
          <div className="max-w-xs">
            <h2 className="text-left text-3xl font-semibold tracking-[-0.015em] text-balance">Вакансии</h2>
            <p className="mt-4 text-left text-base/6">Найдите лучшие предложения работы в Туркменистане</p>
          </div>
        </WobbleCard>
      </Link>
      <Link href={"/cv"}>
        <WobbleCard containerClassName=" min-h-[220px] h-full bg-card text-card-foreground">
          <h2 className="max-w-80 text-left text-3xl font-semibold tracking-[-0.015em] text-balance">Резюме</h2>
          <p className="mt-4 max-w-104 text-left text-base/6">Выложите свое резюме что бы стать заметнее</p>
        </WobbleCard>
      </Link>
      <Link href={"/"} className="col-span-2 h-full min-h-[220px]">
        <WobbleCard containerClassName="col-span-2 bg-card-foreground text-card h-full">
          <div className="max-w-sm">
            <h2 className="w-full text-left text-3xl font-semibold tracking-[-0.015em]">Менторы</h2>
            <p className="mt-4 max-w-104 text-left text-base/6">
              Получите поддержку и советы от опытных профессионалов
            </p>
          </div>
        </WobbleCard>
      </Link>
    </div>
  );
}
