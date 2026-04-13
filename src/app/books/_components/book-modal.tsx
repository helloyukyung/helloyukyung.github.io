"use client";

import Image from "next/image";
import { useEffect } from "react";

export type Book = {
  id: number;
  title: string;
  image: string;
  date: string;
  review: string;
};

export default function BookModal({
  book,
  onClose,
}: {
  book: Book | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!book) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [book, onClose]);

  if (!book) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="flex max-h-[calc(100vh-2rem)] w-full max-w-md flex-col rounded-lg bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-end p-4 pb-0">
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-600"
            aria-label="닫기"
          >
            ✕
          </button>
        </div>
        <div className="overflow-y-auto p-6 pt-2">
          <div className="relative mx-auto aspect-3/4 w-40">
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="rounded object-cover"
            />
          </div>
          <h3 className="mt-4 text-center text-lg font-semibold text-black">
            {book.title}
          </h3>
          <p className="mt-1 text-center text-sm text-zinc-400">{book.date}</p>
          <div className="mt-4 space-y-4 leading-7 text-zinc-600">
            {book.review.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
