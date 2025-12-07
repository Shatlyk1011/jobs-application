"use client";
import { FC, useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { CheckCheck, Copy } from "lucide-react";
import { copyToClipboard } from "@/composables/utils";

interface Props {
  additionalContact: string;
}

const AdditionalContactComponent: FC<Props> = ({ additionalContact }) => {
  const [isSuccess, setSuccess] = useState(false);

  const isTelegram = additionalContact.startsWith("@");
  const isLink = additionalContact.includes("http");

  const getText = () => {
    if (isTelegram) return "Submit a request via Telegram";
    else if (isLink && !isTelegram) return "Submit a request";
    return null;
  };
  const getUrl = () => {
    if (isTelegram) {
      return `https://t.me/${additionalContact}`;
    }
    return additionalContact;
  };

  const text = getText();

  const copyBtn = useRef(null);

  const onClick = async (value: string) => {
    if (value) {
      await copyToClipboard(value);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    }
  };

  return (
    <>
      {text && (
        <a href={getUrl()} target="_blank" rel="noopener" className="max-w-max border-b border-current">
          {text}
        </a>
      )}

      {!isLink && !isTelegram && (
        <div className="text-foreground opacity flex items-center gap-1">
          <span className="">Submit a request here:</span>
          <div
            className={cn(
              "bg-secondary flex items-center gap-2 rounded-sm px-2.5 py-1 font-semibold transition",
              isSuccess && "bg-green-200 dark:bg-green-900",
            )}
          >
            {additionalContact}
            <button onClick={() => onClick(additionalContact)} ref={copyBtn}>
              {isSuccess ? (
                <CheckCheck size="18" className="" />
              ) : (
                <Copy size="18" className="opacity-80 transition hover:opacity-100" />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdditionalContactComponent;
