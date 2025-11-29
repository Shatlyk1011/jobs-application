import { FC } from "react";
import { siteConfig } from "@/config";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import AdditionalContactComponent from "./AdditionalContactComponent";
import { CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  jobContactUrl: string;
  additionalContact?: string;
  additionalNote?: string;
}

const ContactDialogButton: FC<Props> = ({ jobContactUrl, additionalContact, additionalNote }) => {
  const isTelegram = jobContactUrl.includes("t.me");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button data-slot="dialog-trigger" variant="default" className="w-full py-5">
          Посмотреть контакты
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-popover rounded-3xl border-none max-sm:rounded-2xl max-sm:p-5">
        <DialogHeader>
          <DialogTitle className="mb-6 max-lg:mb-4">Контакты работодателя</DialogTitle>
          <div className="mb-2 flex flex-col gap-3 text-sm max-sm:mb-0">
            <a
              href={jobContactUrl}
              target="_blank"
              rel="noopener"
              className={cn(
                "text-sidebar-primary max-w-max border-b border-current",
                additionalNote ? "text-inherit" : "text-sidebar-primary",
              )}
            >
              {isTelegram ? "Ссылка на вакансию (в телеграм)" : "Ссылка на вакансию"}
            </a>
            {additionalContact && <AdditionalContactComponent additionalContact={additionalContact} />}
            {additionalNote && (
              <div className="text-sidebar-primary trackingone bg-secondary/50 mt-2 flex items-center gap-2 rounded-lg px-2 py-2 pr-6 text-[16px] font-semibold">
                <CircleAlert className="min-h-6 min-w-6 text-inherit max-sm:min-h-5 max-sm:min-w-5" />
                <p className="opacity-90">{additionalNote}</p>
              </div>
            )}
          </div>
        </DialogHeader>
        <div className="bg-secondary text-secondary-foreground rounded-2xl px-4 py-4 text-sm">
          <p>
            Никогда не переводите работодателю деньги. Если Вы столкнулись с мошенничеством или ошибкой — пожалуйста,
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
