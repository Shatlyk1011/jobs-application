"use client";
import { FC, useState } from "react";

//components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import ResumeForm from "./ResumeForm";

interface Props {}

const AddResumeDialogButton: FC<Props> = () => {
  const [dialog, setDialog] = useState(false);

  return (
    <Dialog open={dialog} onOpenChange={setDialog} >
      <DialogTrigger asChild>
        <Button data-slot="dialog-trigger" variant="default" className="py-5">
          Разместить резюме
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-popover rounded-3xl max-sm:rounded-2xl border-none max-sm:gap-3 max-sm:p-4">
        <DialogHeader>
          <DialogTitle className="mb-2 max-sm:text-xl max-sm:mb-1">Разместите резюме</DialogTitle>
          <DialogDescription className="mb-4 max-sm:max-w-[85%] max-sm:mx-auto ">Заполните форму для быстрой публикации вашего резюме</DialogDescription>
        </DialogHeader>
        <ResumeForm close={() => setDialog(false)} />
      </DialogContent>
    </Dialog>
  );
};
export default AddResumeDialogButton;
