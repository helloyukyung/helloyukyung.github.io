import fs from "fs";
import path from "path";
import BookList from "@/app/books/_components/book-list";

const BOOKS_DATA = [
  {
    id: 2,
    title: "팩트풀니스",
    author: "한스 로슬링",
    image: "/books/factfulness.jpg",
    date: "2026. 03 –",
    reviewFile: "factfulness.md",
  },
  {
    id: 1,
    title: "익스트림 프로그래밍",
    author: "켄트 벡",
    image: "/books/extream-programming.jpg",
    date: "2026. 02 – 2026. 03",
    reviewFile: "extreme-programming.md",
  },
];

function getBooks() {
  const dataDir = path.join(process.cwd(), "src/app/books/_data");
  return BOOKS_DATA.map((book) => ({
    id: book.id,
    title: book.title,
    author: book.author,
    image: book.image,
    date: book.date,
    review: fs.readFileSync(path.join(dataDir, book.reviewFile), "utf-8"),
  }));
}

export default function BooksPage() {
  const books = getBooks();

  return (
    <div className="flex items-center justify-center font-sans">
      <main className="w-full max-w-3xl px-6 py-16">
        <header className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black">
            Books
          </h1>
          <p className="mt-4 leading-8 text-zinc-600">
            읽은 책에 대한 감상평을 남깁니다.
          </p>
        </header>
        <BookList books={books} />
      </main>
    </div>
  );
}
