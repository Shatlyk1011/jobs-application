import { FC } from "react";
import { siteConfig } from "@/config";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import AdditionalContactComponent from "./AdditionalContactComponent";
import { CircleAlert } from "lucide-react";

interface Props {
  jobContactUrl: string;
  additionalContact?: string;
  additionalNote?: string
}

const ContactDialogButton: FC<Props> = ({ jobContactUrl, additionalContact, additionalNote }) => {
  const isTelegram = jobContactUrl.includes("t.me");

  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button data-slot="dialog-trigger" variant="default" className="w-full py-5">
          Посмотреть контакты
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-popover rounded-3xl border-none">
        <DialogHeader>
          <DialogTitle className="mb-6">Контакты работодателя</DialogTitle>
          <div className="mb-4 flex flex-col gap-3 text-sm">
            <a
              href={jobContactUrl}
              target="_blank"
              rel="noopener"
              className="text-sidebar-primary max-w-max border-b border-current"
            >
              {isTelegram ? "Ссылка на вакансию (в телеграм)" : "Ссылка на вакансию"}
            </a>
            {additionalContact && (
              <AdditionalContactComponent additionalContact={additionalContact} />
            )}
            {additionalNote && (
              <div className=" flex text-sidebar-primary items-center gap-2 text-xs font-semibold trackingone rounded-lg">
                <CircleAlert size="24" className="text-inherit" />
                <p>{additionalNote}</p>
              </div>
            )}
          </div>
        </DialogHeader>
        <div className="bg-secondary text-secondary-foreground rounded-2xl py-4 px-4 text-sm">
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
