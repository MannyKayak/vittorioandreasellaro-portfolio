"use client";
import ArticleFeed from "@/components/ArticleFeed";
import React, { useEffect, useState } from "react";
import { Article } from "../types";
import Navbar from "@/components/Navbar";
import { orderByArticleDate } from "@/functions/utils";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch("/data/articles.json");
      const articlesList = await res.json();
      if (!articlesList) {
        setMessage("Non è stato possibile trovare alcun articolo");
        return;
      }
      setMessage(null);
      orderByArticleDate(articlesList);
      setArticles(articlesList);
    };

    fetchArticles();
  }, [articles]);
  return (
    <div className="bg-white text-gray-700">
      <Navbar />
      {message ? <div>{message}</div> : <ArticleFeed articles={articles} />}
    </div>
  );
}
