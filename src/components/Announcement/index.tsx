"use client";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { FC, useEffect, useState } from "react";

interface Props {}

const Announcement: FC<Props> = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // for initial animation
    setOpen(true);
  }, []);

  return (
    <div className="bg-sidebar-primary/30 z-1000">
      <div
        className={cn(
          "linear relative z-100 flex h-10 items-center justify-center transition-all duration-300",
          open ? "top-0" : "-top-12 h-0 opacity-0",
        )}
      >
        <p className={cn("-tracking-one text-sm font-medium text-nowrap")}>
          This project is complete and fully open source. Check out the{" "}
          <a className="border-b border-current" target="_blank" rel="noopener" href="https://github.com/Shatlyk1011/jobs-application">
            GitHub
          </a>{" "}
          to see the code.
        </p>
        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 hover:cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
export default Announcement;
