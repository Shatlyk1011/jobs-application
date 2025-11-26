"use client";
import { FC, useRef, useState } from "react";

import { CheckCheck, Copy } from "lucide-react";
import { copyToClipboard } from "@/composables/utils";

interface Props {
  additionalContact: string;
}

const AdditionalContactComponent: FC<Props> = ({ additionalContact }) => {

  const [isSuccess, setSuccess] = useState(false)


  const isTelegram = additionalContact.includes("t.me");
  const isLink = additionalContact.includes("http");

  const getText = () => {
    if (isTelegram) return " Отправить заявку в телеграм";
    else if (isLink && !isTelegram) return "Отправить заявку";
    return null;
  };

  const text = getText();

  const copyBtn = useRef(null);

  const onClick = async (value: string) => {
    if (value) {
      await copyToClipboard(value);
      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
      }, 4000)
    }
  };

  return (
    <>
      {!!text && (
        <a
          href={additionalContact}
          target="_blank"
          rel="noopener"
          className="text-sidebar-primary max-w-max border-b border-current"
        >
          {text}
        </a>
      )}

      {!isLink && !isTelegram && (
        <div className="text-foreground opacity flex gap-1">
          <span className="opacity-80">Отправить заявку тут:</span>
          <div className="flex items-center gap-2 text-white">
            {additionalContact}
            <button onClick={() => onClick(additionalContact)} ref={copyBtn}>
              {isSuccess ? (
                <CheckCheck size="20" className="text-green-500 " />
              ) : (
                <Copy size="20" className="opacity-80 transition hover:opacity-100" />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdditionalContactComponent;
