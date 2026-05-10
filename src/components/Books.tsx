import { useState, useEffect } from "react";
import type { Book } from "../types/book";
import BookInfo from "./BookInfo";

const API_URL = "https://api.potterdb.com/v1/books";
const STORAGE_KEY = "hp_books";

const fetchBooks = async (): Promise<Book[]> => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored) as Book[];
  }
  const res = await fetch(API_URL);
  const json = await res.json();
  const books: Book[] = json.data ?? [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  return books;
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex flex-col gap-6">
            {books.map((book) => (
              <BookInfo key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Books