'use client';

import BooksList from '@/components/main/BooksList';
import { Book } from '@/types/bookTypes';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const option = searchParams.get('option') || '통합검색';
  const [results, setResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (query && option) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`/api/search?option=${option}&query=${query}`);
          const data = await response.json();
          setResults(data);
        } catch (error) {
          console.error('검색 오류:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [query, option]);

  return (
    <div className="container mx-auto my-10 flex flex-col justify-center items-center *:text-start">
      <h1 className="text-2xl text-start font-semibold mb-5">
        <span className="text-red-600 pr-2 text-3xl">&quot;{query}&quot;</span> 에 대한 {results.length}개의 검색 결과
      </h1>
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <>{results.length > 0 ? <BooksList books={results} /> : <p>검색 결과가 없습니다.</p>}</>
      )}
    </div>
  );
};

export default SearchPage;
