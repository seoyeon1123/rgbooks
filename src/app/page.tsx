'use client';

import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';
import BooksList from '@/components/main/BooksList';
import ErrorMessage from '@/components/common/Error';
import { Book } from '@/types/bookTypes';
import { fetchBooks } from '@/services/bookService';

const Page = () => {
  const {
    data: books = [],
    error,
    isLoading,
  } = useQuery<Book[], Error>({
    queryKey: ['books'],
    queryFn: fetchBooks,
  });

  if (error instanceof Error) {
    return <ErrorMessage message={error.message} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (books.length === 0) {
    return <ErrorMessage message="책이 없습니다." />;
  }

  return (
    <div className=" mx-auto my-10 flex flex-col justify-start items-center min-h-screen ">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
        📖 <span className="text-orange-600">전체</span> <span className="text-blue-600">책</span> 목록
      </h1>
      <p className="text-gray-600 text-lg text-center mb-8">다양한 책들을 둘러보고 원하는 책을 선택하세요!</p>

      <BooksList books={books} />
    </div>
  );
};

export default Page;
