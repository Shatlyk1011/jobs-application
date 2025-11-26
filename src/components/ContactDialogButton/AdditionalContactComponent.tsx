"use client";
import { FC, useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { CheckCheck, Copy } from "lucide-react";
import { copyToClipboard } from "@/composables/utils";

interface Props {
  additionalContact: string;
}

const AdditionalContactComponent: FC<Props> = ({ additionalContact }) => {

  const [isSuccess, setSuccess] = useState(false)

  const isTelegram = additionalContact[0] === '@'
  const isLink = additionalContact.includes("http");

  const getText = () => {
    if (isTelegram) return "Отправить заявку в телеграм";
    else if (isLink && !isTelegram) return "Отправить заявку";
    return null;
  };

  const getUrl = () => {
    if (isTelegram) {
      return `https://t.me/${additionalContact.slice(1, -1)}`
    }
    return additionalContact
  }

  const text = getText();

  const copyBtn = useRef(null);

  const onClick = async (value: string) => {
    if (value) {
      await copyToClipboard(value);
      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
      }, 6000)
    }
  };

  return (
    <>
      {!!text && (
        <a
          href={getUrl()}
          target="_blank"
          rel="noopener"
          className="text-sidebar-primary max-w-max border-b border-current"
        >
          {text}
        </a>
      )}

      {!isLink && !isTelegram && (
        <div className="text-foreground opacity flex items-center gap-1">
          <span className="">Отправить заявку тут:</span>
          <div className={cn("flex items-center gap-2 font-semibold px-2.5 py-1 bg-secondary rounded-sm transition", isSuccess && 'bg-green-200 dark:bg-green-900')}>
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
