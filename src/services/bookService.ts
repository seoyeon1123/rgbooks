import { Book } from '@/types/bookTypes';

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch('/api/books');
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  return response.json();
};
