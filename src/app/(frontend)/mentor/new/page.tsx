import { Metadata } from "next";

import { constructMetadata } from "@/lib/utils";

//components
import { Logo } from "@/components/ui/Logo";
import CreateMentorForm from "@/components/CreateMentorForm";

export const metadata: Metadata = constructMetadata({
  title: "Ganat - Mentors",
  description:
    "We welcome talented and experienced mentors who can share their knowledge and help both aspiring and established professionals reach new heights.",
});

export default function MentorNewPage() {
  return (
    <main className="mx-auto w-full max-w-3xl p-5 text-center max-sm:p-3 max-sm:pb-8">
      <header className="mb-6 flex items-center justify-center gap-10 max-md:gap-4 max-sm:flex-col max-sm:gap-5">
        <div className="flex-1">
          <Logo className="h-full w-full opacity-90 max-sm:h-16" />
        </div>
        <div className="flex flex-2 flex-col gap-4 text-start">
          <h1 className="-tracking-three text-2xl leading-[1.2] font-medium text-balance max-sm:text-center">
            Thank you for your interest in becoming part of the Ganat team.
          </h1>
          <p className="text-sm opacity-90 max-sm:mx-auto max-sm:max-w-[90%] max-sm:text-center">
            We welcome talented and experienced mentors who can share their knowledge and help both emerging and mature
            professionals reach new heights.
          </p>
          <p className="text-sm font-semibold opacity-90 max-sm:mx-auto max-sm:max-w-[90%] max-sm:text-center max-sm:text-base">
            Please fill out the form, <br className="hidden max-sm:block" /> so we can <br className="max-md:hidden" />{" "}
            learn more about you.
          </p>
        </div>
      </header>

      <CreateMentorForm />
    </main>
  );
}
