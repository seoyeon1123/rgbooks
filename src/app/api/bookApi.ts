import { Book } from '@/types/bookTypes';

export const fetchBookById = async (id: string): Promise<Book> => {
  const response = await fetch(`/api/books/${id}`);
  if (!response.ok) {
    throw new Error('책 정보를 가져오는 데 실패했습니다.');
  }
  const data: Book = await response.json();
  return data;
};

export const deleteBookById = async (id: string): Promise<void> => {
  const response = await fetch(`/api/books/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('책 삭제에 실패했습니다.');
  }
};

export const updateBookById = async (id: string, updatedBook: Book): Promise<Book> => {
  const response = await fetch(`/api/books/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedBook),
  });

  if (!response.ok) {
    throw new Error('책 업데이트에 실패했습니다.');
  }

  const data: Book = await response.json();
  return data;
};
