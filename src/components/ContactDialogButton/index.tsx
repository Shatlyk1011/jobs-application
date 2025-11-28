import { FC } from "react";
import { siteConfig } from "@/config";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import AdditionalContactComponent from "./AdditionalContactComponent";
import { CircleAlert } from "lucide-react";

interface Props {
  jobContactUrl: string;
  additionalContact?: string;
  additionalNote?: string;
}

const ContactDialogButton: FC<Props> = ({ jobContactUrl, additionalContact, additionalNote = '1231231 23 123 12 31 23 12 31 23 123 ' }) => {
  const isTelegram = jobContactUrl.includes("t.me");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button data-slot="dialog-trigger" variant="default" className="w-full py-5">
          Посмотреть контакты
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-popover rounded-3xl border-none max-sm:p-5 max-sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="mb-6 max-lg:mb-4 ">Контакты работодателя</DialogTitle>
          <div className="mb-2 max-sm:mb-0 flex flex-col gap-3 text-sm">
            <a
              href={jobContactUrl}
              target="_blank"
              rel="noopener"
              className="text-sidebar-primary max-w-max border-b border-current"
            >
              {isTelegram ? "Ссылка на вакансию (в телеграм)" : "Ссылка на вакансию"}
            </a>
            {additionalContact && <AdditionalContactComponent additionalContact={additionalContact} />}
            {additionalNote && (
              <div className="text-sidebar-primary trackingone flex items-center gap-2 bg-secondary py-2 px-2 rounded-lg mt-2 text-xs font-semibold">
                <CircleAlert className="text-inherit w-6 h-6 max-sm:w-5 max-sm:h-5" />
                <p>{additionalNote}</p>
              </div>
            )}
          </div>
        </DialogHeader>
        <div className="bg-secondary text-secondary-foreground rounded-2xl px-4 py-4 text-sm">
          <p>
            Никогда не переводите работодателю деньги. Если вы столкнулись с мошенничеством или ошибкой — пожалуйста,
            сообщите нам в{" "}
            <a href={siteConfig.telegram_support} target="_blank" rel="noopener" className="border-b border-current">
              телеграм
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ContactDialogButton;
