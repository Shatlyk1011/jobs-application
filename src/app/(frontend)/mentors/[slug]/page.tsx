import { stringify } from "qs-esm";
import ConsultationForm from "@/components/ConsultationForm";
import RichText from "@/components/RichText";
import useMentors from "@/services/useMentors";

import { DEFAULT_LIMIT } from "@/shared/constant";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/utils";

export const revalidate = 7200;

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata | undefined> {
  const { getMentorBySlug } = useMentors();
  const { slug } = await props.params;
  const findMentor = await getMentorBySlug(slug);
  const mentor = findMentor[0];

  if (!mentor) return;

  return {
    ...constructMetadata({
      title: `Ментор ${mentor.username}`,
      description: mentor.howCanYouHelp,
    }),
  };
}

interface Props {
  params: Promise<{ slug: string }>;
}

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

export async function generateStaticParams() {
  const { getMentors } = useMentors();
  const mentors = await getMentors(stringifiedQuery);
  return mentors;
}

export default async function MentorPage({ params }: Props) {
  const { slug } = await params;

  const { getMentorBySlug } = useMentors();

  const result = await getMentorBySlug(slug);
  const mentor = result[0];

  return (
    <section className="w-full py-10 max-lg:py-8 max-sm:pt-20">
      <article className="bg-popover relative mb-6 flex items-start gap-5 rounded-3xl p-5 pr-12 pb-10 max-lg:gap-3 max-lg:rounded-2xl max-lg:p-4 max-sm:mb-4 max-sm:flex-col">
        {/* left */}
        <figure className="sticky top-5 left-0 min-h-14 min-w-14 max-sm:static">
          <img
            src={mentor.imageBase64}
            alt="profile image"
            className="h-14 w-14 rounded-[18px] object-cover max-sm:rounded-[14px]"
          />
        </figure>

        {/* right */}

        <div className="text-start">
          <h3 className="-tracking-two mb-3 text-lg max-lg:mb-2">{mentor.username}</h3>
          <h4 className="-tracking-two mb-5 text-sm max-lg:mb-3">{mentor.position}</h4>

          <RichText content={mentor?.mdx} />
        </div>
      </article>

      <div className="bg-popover rounded-3xl p-5">
        <ConsultationForm mentorName={mentor.username} price={mentor.price} slug={mentor.slug} />
      </div>
    </section>
  );
}
