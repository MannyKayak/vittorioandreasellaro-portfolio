import Link from "next/link";
import React from "react";

interface IMiniCard {
  title: string;
  link: string;
  event: string | null;
}

export default function MiniCard(miniCardProps: IMiniCard) {
  return (
    <div className="bg-white border-l-6 p-2 shadow-2xl border-l-teal-600 m-2 w-lg rounded-3xl  text-lg hover:rotate-x-5 hover:rotate-y-5 hover:-translate-y-2 duration-1000">
      <div className="overflow-hidden">{miniCardProps.title}</div>
      <div>
        <Link
          className="hover:text-teal-700 text-sm font-bold"
          href={miniCardProps.link}
          target="_blank"
        >
          Link All'articolo
        </Link>
      </div>
    </div>
  );
}
