import SocialsSpan from "@/components/SocialsSpan";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center mt-4 h-screen">
      <div className="flex flex-col justify-center items-center text-4xl font-bold mb-4 gap-4 text-gray-700">
        <h1>
          Community <strong className="text-teal-600">BIM (K)now!</strong>
        </h1>
        <h2 className="text-center text-2xl text-gray-500">
          Seguici sui social per restare aggiornato
        </h2>
        <div className="flex gap-4">
          {/* Facebook */}
          <Link
            href="https://www.facebook.com/DesignDataUsers"
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
            href="https://www.instagram.com/ddu_bimcommunity/"
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
        </div>
      </div>
      <SocialsSpan />
    </div>
  );
}
