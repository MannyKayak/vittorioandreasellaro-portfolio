"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import CopyIcon from "./icons/CopyIcon";

const myEmail = "vittorioandrea.sellaro@gmail.com";
const emailMessages = {
  initial: "Copia mail negli appunti",
  copied: "Email copiata!",
};

export default function SocialsSpan() {
  const [emailSpan, setEmailSpan] = useState<string>("");
  const [copyMessage, setCopyMessage] = useState<string>(emailMessages.initial);

  const copyMail = () => {
    navigator.clipboard.writeText(emailSpan);
    setCopyMessage(emailMessages.copied);
  };

  const toggleEmailDiv = () => {
    setEmailSpan(emailSpan ? "" : myEmail);
    setCopyMessage(emailMessages.initial);
  };

  return (
    <div className="flex flex-col justify-center items-center text-4xl font-bold mb-4 text-gray-700">
      <h1>I miei riferimenti</h1>
      <div className="flex gap-4 mt-4">
        {/* Facebook */}
        <Link
          href="https://www.facebook.com/vsellaro"
          passHref
          target="_blank"
          className="h-8 w-8"
        >
          <Image
            src="/logos/facebook-logo.png"
            alt="facebook-logo"
            width={32}
            height={32}
            className="object-cover"
          />
        </Link>
        {/* Instagram */}
        <Link
          href="https://www.instagram.com/svandrea_7/"
          passHref
          target="_blank"
          className="w-8 h-8"
        >
          <Image
            src="/logos/instagram-logo.png"
            alt="instagram-logo"
            width={36}
            height={36}
            className="object-contain"
          />
        </Link>
        {/* Linkedin */}
        <Link
          href="https://www.linkedin.com/in/vittorio-andrea-sellaro-9a5b87177/"
          passHref
          target="_blank"
          className="w-8 h-8"
        >
          <Image
            src="/logos/linkedin-logo.png"
            alt="linkedin-logo"
            width={36}
            height={36}
            className="object-contain"
          />
        </Link>
        {/* mail */}
        <div className="w-8 h-8" onClick={toggleEmailDiv}>
          <Image
            src="/logos/email-logo.png"
            alt="email-logo"
            width={36}
            height={36}
            className="object-contain"
          />
        </div>
      </div>
      {emailSpan ? (
        <div className="flex flex-col items-center mt-4 text-3xl text-gray-500">
          <h1>Scrivimi a: </h1>
          <div className="text-teal-600 text-2xl mx-4 mt-4 border-2 border-gray-500 rounded-2xl p-4">
            {emailSpan}
          </div>
          <div className="flex flex-row w-full mt-4 px-8 items-center justify-end gap-4">
            <span className="text-sm">{copyMessage}</span>
            <button onClick={copyMail}>
              <CopyIcon />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
