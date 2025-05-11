import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center mt-4 h-screen">
      <div className="flex flex-col items-center text-4xl font-bold mb-4 gap-4 text-gray-700">
        <h1>
          Community <strong className="text-teal-600">BIM (K)now!</strong>
        </h1>
        <h2 className="text-2xl text-gray-500">
          Seguici sui social per restare aggiornato
        </h2>
        <div>
          <div className="w-10 h-10">
            <Link href={"https://www.facebook.com/DesignDataUsers"}>
              <Image
                src={"/logos/facebook-logo.png"}
                alt="facebook-logo"
                fill
                className="object-cover"
              />
            </Link>
          </div>
        </div>

        <Link href={"https://www.instagram.com/ddu_bimcommunity/"}>
          <Image
            src={"/logos/instagram-logo.png"}
            alt="instagram-logo"
            fill
            className="object-cover"
          />
        </Link>
      </div>
      <div className="flex justify-center text-4xl font-bold mb-4 text-gray-700">
        <h1>I miei riferimenti</h1>
      </div>
    </div>
  );
}
