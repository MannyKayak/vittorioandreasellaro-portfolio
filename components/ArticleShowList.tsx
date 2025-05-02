"use client";
import React, { useEffect, useState } from "react";

type Article = {
  title: string;
  date: string;
  abstract: string;
  // aggiungi altri campi se necessari
};

export default function ArticleShowList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("/data/articles.json");
      const data = await res.json();
      setArticles(data.slice(0, 4)); // ad es. primi 4 articoli
    }

    fetchArticles();
  }, []);

  return <div></div>;
}
