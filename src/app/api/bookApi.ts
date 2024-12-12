import { Book } from '@/types/bookTypes';

export const fetchBookById = async (id: string): Promise<Book> => {
  const response = await fetch(`/api/books/${id}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('책을 찾을 수 없습니다. (404)');
    }
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
    if (response.status === 404) {
      throw new Error('책을 찾을 수 없습니다. 삭제할 수 없습니다. (404)');
    }
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
    if (response.status === 404) {
      throw new Error('책을 찾을 수 없습니다. 업데이트할 수 없습니다. (404)');
    }
    if (response.status === 400) {
      throw new Error('잘못된 요청입니다. (400)');
    }
    throw new Error('책 업데이트에 실패했습니다.');
  }

  const data: Book = await response.json();
  return data;
};
