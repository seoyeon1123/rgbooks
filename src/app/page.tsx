'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Loading from './Loading'; // Loading 컴포넌트 임포트

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  quantity: number;
  imageUrl: string;
  description: string;
}

const Page = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const booksPerPage = 10;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }

        const data: Book[] = await response.json();
        setBooks(data);
      } catch (error: any) {
        setError(error.message || 'An unexpected error occurred');
      } finally {
        setLoading(false); // 데이터 로딩 후 로딩 상태 false로 변경
      }
    };

    fetchBooks();
  }, []);

  const startIndex = (currentPage - 1) * booksPerPage;
  const currentBooks = books.slice(startIndex, startIndex + booksPerPage);

  const totalPages = Math.ceil(books.length / booksPerPage);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (loading) {
    // 로딩 상태일 때 로딩 컴포넌트 표시
    return <Loading />;
  }

  if (books.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">등록된 책이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center mb-8">등록된 책 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {currentBooks.map((book) => (
          <Link
            href={`/books/${book.id}`}
            key={book.id}
            className="flex flex-col justify-between items-center w-[240px] h-[400px] p-4 "
          >
            <div className="w-[200px] h-[300px] relative">
              <Image
                src={book.imageUrl}
                alt={book.title}
                fill
                className="rounded-md object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold text-center my-2 overflow-hidden">
              {book.title}
            </h2>
            <p className="text-gray-700 text-center text-sm overflow-hidden">
              {book.author}
            </p>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 text-white rounded ${
              currentPage === index + 1
                ? 'bg-blue-500'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page;
