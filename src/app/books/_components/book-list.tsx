"use client";

import Image from "next/image";
import { useState } from "react";
import BookModal, { type Book } from "./book-modal";

export default function BookList({ books }: { books: Book[] }) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  return (
    <>
      <section className="mt-12">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {books.map((book) => (
            <button
              key={book.id}
              onClick={() => setSelectedBook(book)}
              className="flex flex-col items-center gap-3 text-left"
            >
              <div className="relative aspect-3/4 w-full overflow-hidden rounded">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-zinc-600">{book.title}</span>
            </button>
          ))}
        </div>
      </section>
      <BookModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />
    </>
  );
}
