import { AxiosResponse } from "axios";
import axios from "@/lib/axios";

import { IResumes } from "@/types/resume";

//components
import AddResumeDialogButton from "@/components/AddResumeDialogButton";
import CVSection from "@/components/CVSection";
import { stringify } from "qs-esm";

const stringifiedQuery = stringify(
  {
    where: {
      isVisible: {
        equals: true,
      },
    },
  },
  { addQueryPrefix: true },
);

export default async function CVPage() {
  const response: AxiosResponse<IResumes> = await axios(`/resume${stringifiedQuery}`);
  const { data } = response;

  return (
    <main className="w-full">
      <section className="mx-auto w-full max-w-3xl py-12 text-center">
        <h1 className="-tracking-two mb-4 text-4xl font-semibold max-sm:text-3xl max-sm:mb-2">Станьте заметнее для HR</h1>
        <p className="mb-5 text-base leading-[1.3] opacity-80 max-sm:text-sm max-sm:max-w-[80%] max-sm:mx-auto">
          Заполните простую форму — и мы разместим <br className="max-sm:hidden" /> ваше резюме на нашем сайте
        </p>
        <AddResumeDialogButton />
      </section>

      <section className="">
        <CVSection initialData={data} />
      </section>
    </main>
  );
}
