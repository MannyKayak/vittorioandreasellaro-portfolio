export interface ArticleCard {
  id: number;
  title: string;
  link: string;
  abstract: string;
  articleDate: string;
  eventDate: string;
  author: string;
  image: string;
  type: string;
  host: string;
}

export interface BimEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  schedule: string[];
  date: Date;
  isPassed: boolean;
  locandina: string;
}

export type Article = {
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
