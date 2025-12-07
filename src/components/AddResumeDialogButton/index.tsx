"use client";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

//components
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Button } from "../ui/button";
import ResumeForm from "./ResumeForm";

interface Props {}

const AddResumeDialogButton: FC<Props> = () => {
  const [dialog, setDialog] = useState(false);

  const modalValue = useSearchParams().get("modal");

  useEffect(() => {
    if (modalValue === "open") {
      setDialog(true);
    }
  }, [modalValue]);

  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogTrigger asChild>
        <Button data-slot="dialog-trigger" variant="default" className="py-5">
          Post your resume
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-popover rounded-3xl border-none max-sm:min-h-full max-sm:max-w-full max-sm:gap-3 max-sm:overflow-y-auto max-sm:rounded-none max-sm:px-2 max-sm:pt-10 max-sm:pb-6">
        <ResumeForm close={() => setDialog(false)} />
      </DialogContent>
    </Dialog>
  );
};
export default AddResumeDialogButton;
