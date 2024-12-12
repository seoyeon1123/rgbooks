import { Book } from '@/types/bookTypes';

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch('/api/books');
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('책 목록을 찾을 수 없습니다. (404)');
    }
    throw new Error('Failed to fetch books');
  }
  return response.json();
};
