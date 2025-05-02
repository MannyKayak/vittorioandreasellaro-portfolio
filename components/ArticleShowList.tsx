"use client";
import React from "react";

async function fetchJSON(url: string) {
  const resp = await fetch(url);
  const json = await resp.json();
  return json;
}
export default async function ArticleShowList() {
  // fetch dei dati sintetico, listo i primi 4 risultati, in ordine cronologico
  const miniArticleList = fetchJSON("./data/articles.json");
  console.log(miniArticleList);
  return <div>ArticleShowList</div>;
}
