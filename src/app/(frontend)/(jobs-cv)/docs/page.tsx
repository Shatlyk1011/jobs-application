import { Metadata } from "next";

import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Mentors - How does it work?",
  description: "Learn how the mentoring section works",
});

export default async function Docs() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 py-10 max-sm:pt-22">
      <div className="bg-popover w-full rounded-2xl p-8 pr-12 pb-12 text-sm max-sm:p-6 max-sm:pr-10" id="confidential">
        <h2 className="-tracking-three mb-4 text-2xl font-medium">Privacy Policy</h2>

        <p className="mb-6 opacity-80">
          User agreement and consent to the processing of personal data Online service ganat.org (after referred to as
          "Site") follows the principles of protecting user privacy. We ensure safe storage and use of data only for the
          specified purposes. Information means personal data. Taking agreement, you agree to their processing:
          collection, recording, systematization, storage, updating, retrieval, use, transfer, depersonalization,
          blocking, deletion, destruction. To delete data write: help.ganat@mail.ru. Consent includes cross-border data
          transfers.
        </p>

        <h2 className="-tracking-one mb-1 text-xl font-medium">Resume</h2>

        <p className="mb-6 opacity-80">
          You can post your resume on{" "}
          <a className="text-sidebar-primary" href="/cv">
            https://ganat.org/cv
          </a>{" "}
          or send to managers. It is entered into a database accessible only to Site employees. You can request copy via
          help.ganat@mail.ru. You have the right to stop processing and delete your data - we will do so immediately.
        </p>

        <h2 className="-tracking-one mb-1 text-xl font-medium">Rules Changes</h2>

        <p className="mb-6 opacity-80">
          The site may change the rules; updates are posted here. For any questions, please contact help.ganat@mail.ru
        </p>

        <h2 className="-tracking-one mb-1 text-xl font-medium">Disclaimer</h2>

        <p className="mb-6 opacity-80">
          The information is provided “as is”, without guarantees of completeness or accuracy. We are not responsible
          for jobs, hiring, third party confidentiality. Use of the site is at your own risk. To delete data, write
          to us at email help.ganat@mail.ru
        </p>

        <h2 className="-tracking-one mb-1 text-xl font-medium">Copyright</h2>

        <p>
          All materials are protected. Unauthorized copying is prohibited. For any questions please contact
          help.ganat@mail.ru
        </p>
      </div>

      <div className="bg-popover w-full rounded-2xl p-8 pr-12 pb-12 text-sm max-sm:p-6 max-sm:pr-10" id="terms">
        <h2 className="-tracking-three mb-4 text-2xl font-medium">Terms of Use</h2>

        <p className="mb-6 opacity-80">
          By using the ganat.org website (hereinafter referred to as the “Service”), you agree to these Terms, including
          any subsequent changes or modifications. If you do not agree to these Terms of Use, please do not use website
          https://ganat.org
        </p>

        <h2 className="-tracking-three mb-2 text-lg font-medium">Acceptable Use</h2>

        <p className="mb-6 opacity-80">
          You are responsible for your use of the Service and the data provided. Protect the Service from harm,
          expenses, liability due to your use of or violation of the Terms. Use for personal/commercial use only
          purposes without violating the rights of third parties. Unauthorized use is prohibited.
        </p>

        <h2 className="-tracking-three mb-2 text-lg font-medium">Disclaimer</h2>

        <p className="mb-6 opacity-80">
          The service is provided "as is". The owner of the Service and its partners disclaim warranties of any kind.
          you You agree to use the service at your own risk. You accept full responsibility for any harm you suffered as
          a result of using the Service. You assume any risk that concerns the use, security or performance of the
          Service.
        </p>

        <h2 className="-tracking-three mb-2 text-lg font-medium">Agreements</h2>

        <p className="mb-6 opacity-80">
          We reserve the right to change or discontinue the Service at any time, for any reason or without warnings. We
          reserve the right to change the provisions of this document ("Terms of Use") at any time without warning.
          Please review the Terms of Use periodically as they may change in the future..
        </p>

        <h2 className="-tracking-one mb-1 text-xl font-medium">Copyright</h2>

        <p className="opacity-80">
          All materials are protected. Unauthorized copying is prohibited. For any questions please contact
          help.ganat@mail.ru
        </p>
      </div>
    </section>
  );
}
