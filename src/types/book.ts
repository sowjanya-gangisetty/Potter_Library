export type BookAttributes = {
  slug: string;
  author: string;
  cover: string | null;
  dedication: string | null;
  pages: number | null;
  release_date: string | null;
  summary: string | null;
  title: string;
  wiki: string | null;
};

export type Book = {
  id: string;
  type: string;
  attributes: BookAttributes;
};
