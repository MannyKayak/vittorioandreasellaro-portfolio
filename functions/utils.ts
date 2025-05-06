import { Article } from "@/app/types";
export function toDateObject(dateStr: string): Date {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day); // Mese è 0-indexed
}

export function orderByEventDate(articles: Article[]): void {
  articles.sort((a, b) => {
    const [yearA, monthA, dayA] = a.eventDate.split("-").map(Number);
    const [yearB, monthB, dayB] = b.eventDate.split("-").map(Number);

    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);

    return dateA.getTime() - dateB.getTime();
  });
}

export function orderByArticleDate(articles: Article[]): void {
  articles.sort((a, b) => {
    const [yearA, monthA, dayA] = a.articleDate.split("-").map(Number);
    const [yearB, monthB, dayB] = b.articleDate.split("-").map(Number);

    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);

    return dateB.getTime() - dateA.getTime();
  });
}
