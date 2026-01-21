import { AxiosResponse } from "axios";
import axios from "@/lib/axios";
import { stringify } from "qs-esm";
import { Metadata } from "next";

import { DEFAULT_LIMIT } from "@/shared/constant";

import { constructMetadata } from "@/lib/utils";

import { IResumes } from "@/types/resume";

//components
import AddResumeDialogButton from "@/components/AddResumeDialogButton";
import CVSection from "@/components/CVSection";
import { Suspense } from "react";
import EmptyResult from "@/components/ui/EmptyResult";

export const metadata: Metadata = constructMetadata({
  title: "Ganat - CV",
  description: "Upload your resume. Receive responses from employers, find jobs.",
});

const stringifiedQuery = stringify(
  {
    where: {
      isVisible: {
        equals: true,
      },
    },
    limit: DEFAULT_LIMIT,
  },
  { addQueryPrefix: true },
);

export default async function CVPage() {
  const response: AxiosResponse<IResumes> = await axios(`/resume${stringifiedQuery}`);
  if (!response) {
    return <EmptyResult classes="min-h-[50vh] justify-center">Something went wrong</EmptyResult>;
  }
  const { data } = response;

  return (
    <main className="w-full">
      <section className="mx-auto w-full max-w-3xl py-6 text-center">
        <h1 className="-tracking-two mb-4 text-4xl font-semibold max-sm:mb-2 max-sm:text-3xl">
          Become more visible to HR
        </h1>
        <p className="mb-5 text-base leading-[1.3] opacity-80 max-sm:mx-auto max-sm:max-w-[80%] max-sm:text-sm">
          Fill out a simple form and we will post <br className="max-sm:hidden" /> Your resume on our website
        </p>
        <Suspense>
          <AddResumeDialogButton />
        </Suspense>
      </section>

      <section className="">
        <CVSection initialData={data} />
      </section>
    </main>
  );
}
