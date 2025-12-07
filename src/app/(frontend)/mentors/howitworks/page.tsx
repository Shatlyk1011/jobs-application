import { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config";

import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Mentors - How does it work",
  description: "Find out how the mentor section works",
});

export default async function HowItWorks() {
  return (
    <section className="flex w-full flex-col gap-5 py-10 max-sm:pt-22">
      <div className="bg-popover w-full rounded-2xl p-8 pr-12 pb-12 text-sm max-sm:p-6 max-sm:pr-10">
        <h2 className="mb-4 text-2xl font-semibold">How does it work?</h2>

        <p className="mb-3">
          <span className="font-semibold">Ganat Mentors</span> — career consultation service with experts from leading
          IT companies.
        </p>

        <ol className="mb-5 flex flex-col gap-1">
          <li>
            <span className="opacity-70">1)</span> Choose a mentor on{" "}
            <Link className="hover:text-sidebar-primary border-b border-current transition" href="/mentors">
              platform.
            </Link>
          </li>
          <li>
            <span className="opacity-70">2)</span> Review their profile and submit a consultation request.
          </li>
          <li>
            <span className="opacity-70">3)</span> Our manager will contact you to clarify your request and select a
            convenient date/time
          </li>
          <li>
            <span className="opacity-70">4)</span> Confirm your booking, and we'll create a Telegram chat with you and
            your mentor.
          </li>
          <li>
            <span className="opacity-70">5)</span> On the day of the consultation, we'll send you a link to the online
            meeting in the chat.
          </li>
        </ol>

        <p className="mb-3">
          Before the meeting, ask any questions you'd like to discuss in the chat to save time during the session.
        </p>

        <div>
          Not sure which mentor is right for you? <br />
          Our manager will help you with the selection—{" "}
          <a
            className="hover:text-sidebar-primary border-b border-current transition"
            href={siteConfig.telegram_support}
            target="_blank"
            rel="noopener"
          >
            Write to us.
          </a>
        </div>
      </div>
    </section>
  );
}
