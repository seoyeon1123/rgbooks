'use client';

import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import BooksList from '@/components/main/BooksList';
import { Book } from '@/types/bookTypes';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/16/solid';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const option = searchParams.get('option') || '통합검색';

  const [results, setResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!query || !option) return;

      setResults([]);
      setError(null);
      setLoading(true);

      try {
        const response = await fetch(`/api/search?option=${option}&query=${query}`);
        if (!response.ok) {
          setError('응답 데이터 형식이 올바르지 않습니다.');
        }

        const data: Book[] = await response.json();
        if (!Array.isArray(data)) {
          setError('응답 데이터 형식이 올바르지 않습니다.');
        }

        setResults(data);
      } catch (error) {
        console.error('검색 요청 중 오류:', error);
        setError('검색 요청 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, option]);

  if (loading) {
    return (
      <div className="flex flex-col pt-36 justify-start items-center h-screen gap-3">
        <h1 className="text-4xl font-semibold">{query} 검색중입니다...</h1>
        <p>조금만 기다려주세요!</p>
        <div className="mt-10">
          <ArrowPathIcon className="size-20 animate-spin text-darkBlue" />
        </div>
      </div>
    );
  }

  if (error) return <Error message={error} />;

  return (
    <div className="min-h-screen mx-auto flex flex-col justify-start items-center text-start">
      <h1 className="text-2xl font-semibold mb-5">
        <span className="text-red-600 pr-2 text-3xl">&quot;{query}&quot;</span> 에 대한 {results.length}개의 검색 결과
      </h1>
      {results.length > 0 ? <BooksList books={results} /> : <p className="text-gray-500">검색 결과가 없습니다.</p>}
    </div>
  );
};

export default SearchPage;
