"use client";

import Link from "next/link";
import { WobbleCard } from "../ui/wobble-card";

export default function Hero() {
  return (
    <div className="mx-auto grid h-max w-full grid-cols-2 gap-4.5 max-lg:grid-cols-1 max-lg:gap-3">
      <Link href={"/jobs"} prefetch>
        <WobbleCard containerClassName="h-full bg-card text-card-foreground min-h-[200px] max-sm:min-h-[180px]">
          <div className="max-w-xs">
            <h2 className="text-left text-2xl font-semibold tracking-[-0.015em] text-balance max-sm:text-2xl">Jobs</h2>
            <p className="mt-3 text-left text-base/6 opacity-90 max-sm:mt-2">
              Find the best job offers in your country
            </p>
          </div>
        </WobbleCard>
      </Link>
      <Link href={"/cv"} prefetch>
        <WobbleCard containerClassName=" min-h-[200px] max-sm:min-h-[180px] h-full bg-card text-card-foreground">
          <h2 className="max-w-80 text-left text-2xl font-semibold tracking-[-0.015em] text-balance max-sm:text-2xl">
            Resume
          </h2>
          <p className="mt-3 max-w-104 text-left text-base/6 opacity-90 max-sm:mt-2">
            Upload your resume to increase your visibility
          </p>
        </WobbleCard>
      </Link>
      <Link href={"/mentors"} className="col-span-2 h-full min-h-[200px] max-lg:col-span-1 max-sm:min-h-[180px]">
        <WobbleCard containerClassName="col-span-2 max-lg:col-span-1 bg-card-foreground text-card h-full">
          <div className="max-w-sm">
            <h2 className="w-full text-left text-2xl font-semibold tracking-[-0.015em] max-sm:text-2xl">Mentors</h2>
            <p className="mt-3 max-w-104 text-left text-base/6 opacity-90 max-sm:mt-2">
              Get support and advice from experienced professionals
            </p>
          </div>
        </WobbleCard>
      </Link>
    </div>
  );
}
