"use client";

import React from "react";
import Image from "next/image";
import { Article } from "@/app/types";
type Props = {
  articles: Article[];
};

export default function ArticleFeed({ articles }: Props) {
  return (
    <div className="w-full px-4 py-10 bg-gradient-to-b from-gray-100 to-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">
        📚 Tutti gli articoli su BIM (K)now!
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white`}
          >
            <div className="relative h-56 w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="text-xs uppercase">{article.type}</p>
                  <h3 className="text-lg font-semibold">{article.title}</h3>
                </div>
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-500">
                ✍ {article.author} –{" "}
                {new Date(article.articleDate).toLocaleDateString()}
              </p>
              <p className="mt-2 text-gray-700 text-sm">{article.abstract}</p>
              <p className="mt-3 text-xs text-gray-400 italic">
                Evento: {new Date(article.eventDate).toLocaleDateString()} ·{" "}
                {article.host}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
