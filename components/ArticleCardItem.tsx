import React from "react";
import Image from "next/image";
import { ArticleCard } from "../app/types";

export default function ArticleCardItem(article: ArticleCard) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
        <p className="text-gray-600 text-sm mt-1">{article.abstract}</p>
        <p className="text-xs text-gray-400 mt-2">
          Pubblicato da {article.author} il {article.articleDate}
        </p>
      </div>
    </a>
  );
}
