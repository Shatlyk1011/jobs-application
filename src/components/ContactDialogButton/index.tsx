import { FC } from "react";
import { siteConfig } from "@/config";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

interface Props {
  contactUrl: string;
}

const ContactDialogButton: FC<Props> = ({ contactUrl }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button data-slot="dialog-trigger" variant="default" className="w-full py-5">
          Посмотреть контакты
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-popover rounded-3xl border-none">
        <DialogHeader>
          <DialogTitle className="mb-6">Контакты работодателя</DialogTitle>
          <DialogDescription className="mb-4">
            <a
              href={contactUrl}
              target="_blank"
              rel="noopener"
              className="text-sidebar-primary border-b border-current"
            >
              Ссылка на вакансию
            </a>
          </DialogDescription>
        </DialogHeader>
        <div className="bg-secondary text-secondary-foreground rounded-2xl p-5 text-sm">
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
