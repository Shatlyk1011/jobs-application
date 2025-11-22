import ConsultationForm from "@/components/ConsultationForm";
import RichText from "@/components/RichText";
import { getMentorBySlug, getMentors } from "@/services/getMentors";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const mentors = await getMentors();
  console.log("mentors", mentors);
  return mentors;
}

export default async function MentorPage({ params }: Props) {
  const { slug } = await params;

  const result = await getMentorBySlug(slug);
  const mentor = result[0];

  return (
    <section className="w-full py-10">
      <article className="bg-popover relative mb-6 flex items-start gap-5 rounded-3xl p-5 pr-12 pb-10">
        {/* left */}
        <figure className="sticky top-5 left-0 min-h-14 min-w-14">
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

          <RichText content={mentor.mdx} />
        </div>
      </article>

      <section className="bg-popover rounded-3xl p-5">
        <ConsultationForm />
      </section>
    </section>
  );
}
