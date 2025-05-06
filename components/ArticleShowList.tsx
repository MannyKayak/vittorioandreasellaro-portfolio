import React, { useEffect, useState } from "react";
import MiniCard from "./MiniCard";
import { Article } from "@/app/types";
import { orderByArticleDate } from "@/functions/utils";

export default function ArticleShowList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("/data/articles.json");
      const data = await res.json();
      // TODO: ordina cronologicamente
      orderByArticleDate(articles);
      setArticles(data.slice(0, 3)); // ad es. primi 4 articoli
    }

    fetchArticles();
  }, []);

  return (
    <div className="grid grid-cols-1">
      {articles.map((article) => (
        <MiniCard
          key={article.id}
          title={article.title}
          link={article.link}
          event={article.type.includes("event") ? article.eventDate : null}
        />
      ))}
    </div>
  );
}
