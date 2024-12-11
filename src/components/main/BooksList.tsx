import { useState } from 'react';
import { Book } from '@/types/bookTypes';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

interface BooksListProps {
  books: Book[];
  booksPerPage?: number;
}

const BooksList = ({ books, booksPerPage = 10 }: BooksListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(books.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const currentBooks = books.slice(startIndex, startIndex + booksPerPage);

  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <div className="flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {currentBooks.map((book) => (
            <Link
              href={`/books/${book.id}`}
              key={book.id}
              className="flex flex-col justify-between items-center w-[240px] h-[400px] p-4 hover:scale-105 transition-transform">
              <div className="w-[200px] h-[300px] relative">
                <Image src={book.imageUrl} alt={book.title} fill className="rounded-md object-cover" />
              </div>
              <h2 className="text-lg font-semibold text-center my-2 overflow-hidden">{book.title}</h2>
              <p className="text-gray-700 text-center text-sm overflow-hidden">{book.author}</p>
            </Link>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center py-4">
          <button disabled={currentPage === 1}>
            <ChevronLeftIcon className="size-7 text-gray-400 " onClick={() => setCurrentPage(currentPage - 1)} />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 mx-1 rounded-full ${
                currentPage === index + 1 ? 'bg-gray-400 text-white' : 'text-black'
              }`}
              onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </button>
          ))}

          <button disabled={currentPage === totalPages}>
            <ChevronRightIcon className="size-7 text-gray-500 " onClick={() => setCurrentPage(currentPage + 1)} />
          </button>
        </div>
      )}
    </div>
  );
};

export default BooksList;
