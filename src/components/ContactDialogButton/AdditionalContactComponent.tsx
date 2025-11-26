'use client'
import { FC, useRef } from 'react';

import { CheckCheck, Copy } from "lucide-react";
import { copyToClipboard } from "@/composables/utils";

interface Props { 
  additionalContact?: string
 };

const AdditionalContactComponent: FC<Props> = ({ additionalContact }) => {
  if (!additionalContact) return null

  const isTelegram = additionalContact.includes('t.me')
  const isLink = additionalContact.includes('http')

  const getText = () => {
    if (isTelegram) return " Отправить заявку в телеграм"
    else if (isLink && !isTelegram) return "Отправить заявку"
    return null
  }

  const text = getText()

  const copyBtn = useRef(null)

  const onClick = async (value: string) => {
    if (value) {
      await copyToClipboard(value);
    }
  }

  return (
    <>
      {
        !!text && (
          <a
            href={additionalContact}
            target="_blank"
            rel="noopener"
            className="text-sidebar-primary border-b border-current max-w-max"
          >
            {text}
          </a>
        )
      }

      {!isLink && !isTelegram && (
        <div className="text-foreground opacity flex gap-1">
          <span className="opacity-80">Отправить заявку тут:</span>
          <div className="text-white flex items-center  gap-2">
            {additionalContact}
            <button onClick={() => onClick(additionalContact)} ref={copyBtn} className="group">
              <Copy size="20" className="opacity-80 group-focus:hidden hover:opacity-100 transition" />
              <CheckCheck size="20" className="text-green-500 group-focus:inline-block hidden" />
            </button>
          </div>
        </div>
      )}


    </>

  )
}

export default AdditionalContactComponent