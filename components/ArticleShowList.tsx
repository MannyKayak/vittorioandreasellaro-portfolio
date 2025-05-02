import React, { useEffect, useState } from "react";
import MiniCard from "./MiniCard";

type Article = {
  id: number;
  title: string;
  link: string;
  abstract: string;
  articleDate: string;
  eventDate: string;
  author: string;
  image: string;
  type: string[];
  host: string;
};

function orderByEventDate(articles: Article[]): void {
  articles.sort((a, b) => {
    const [yearA, monthA, dayA] = a.eventDate.split("-").map(Number);
    const [yearB, monthB, dayB] = b.eventDate.split("-").map(Number);

    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);

    return dateA.getTime() - dateB.getTime();
  });
}
export default function ArticleShowList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("/data/articles.json");
      const data = await res.json();
      // TODO: ordina cronologicamente
      orderByEventDate(articles);
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
