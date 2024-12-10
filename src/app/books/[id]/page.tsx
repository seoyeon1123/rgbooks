'use client';

import Loading from '@/app/Loading';
import BookInfo from '@/components/edit/BookInfo';
import { bookEditState } from '@/state/bookState';
import { Book } from '@/types/bookTypes';
import { CheckIcon } from '@heroicons/react/16/solid';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const BookDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);

  const [bookEditStateValue, setBookEditStateValue] =
    useRecoilState(bookEditState);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`/api/books/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data: Book = await response.json();
        setBook(data);

        setBookEditStateValue({
          title: data.title,
          author: data.author,
          price: data.price,
          quantity: data.quantity,
          imageUrl: data.imageUrl,
          description: data.description,
        });
      } catch (error: any) {
        setError(error.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id, setBookEditStateValue]);

  const handleSave = async () => {
    const updatedBook = {
      ...bookEditStateValue,
      price: parseFloat(bookEditStateValue.price.toString()),
      quantity: parseInt(bookEditStateValue.quantity.toString()),
    };

    try {
      const response = await fetch(`/api/books/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBook),
      });

      if (!response.ok) {
        throw new Error('Failed to update book');
      }

      const updatedData = await response.json();
      setBook(updatedData);
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!book || error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">책 정보를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto px-6 pt-5 pb-20 xl:px-[300px] relative">
      <div className="my-5 flex justify-end">
        {editMode ? (
          <CheckIcon
            onClick={handleSave}
            className="h-7 w-7 text-darkBlue hover:cursor-pointer hover:text-green-500 transition-colors"
          />
        ) : (
          <PencilSquareIcon
            onClick={() => setEditMode(true)}
            className="h-7 w-7 text-darkBlue hover:cursor-pointer hover:text-yellow-500 transition-colors"
          />
        )}
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-end gap-8 mx-auto">
          <div>
            <Image
              src={book.imageUrl}
              alt={book.title}
              width={300}
              height={400}
              className="object-cover rounded-lg shadow-xl"
            />
          </div>

          <div className="flex-1 space-y-6 text-start">
            <h1 className="text-4xl xs:text-2xl sm:text-2xl font-extrabold text-[#D84B16]">
              {editMode ? (
                <input
                  type="text"
                  value={bookEditStateValue.title}
                  onChange={(e) =>
                    setBookEditStateValue({
                      ...bookEditStateValue,
                      title: e.target.value,
                    })
                  }
                  className="text-4xl font-extrabold text-[#D84B16]
                  border-b-2 border-gray-300
                  w-full bg-transparent focus:outline-none focus:border-darkBlue  focus:border-b-2transition-colors"
                />
              ) : (
                book.title
              )}
            </h1>

            <div className="space-y-2">
              <div className="flex flex-col items-start justify-start gap-3">
                <BookInfo
                  label="저자"
                  value={bookEditStateValue.author}
                  editMode={editMode}
                  onChange={(value) =>
                    setBookEditStateValue({
                      ...bookEditStateValue,
                      author: value.toString(),
                    })
                  }
                  type="text"
                />
                <BookInfo
                  label="수량"
                  value={bookEditStateValue.quantity}
                  editMode={editMode}
                  onChange={(value) =>
                    setBookEditStateValue({
                      ...bookEditStateValue,
                      quantity: parseInt(value.toString()),
                    })
                  }
                  type="number"
                />
                <BookInfo
                  label="가격"
                  value={bookEditStateValue.price}
                  editMode={editMode}
                  onChange={(value) =>
                    setBookEditStateValue({
                      ...bookEditStateValue,
                      price: parseFloat(value.toString()),
                    })
                  }
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <hr className="border border-b border-neutral-200 my-4" />
        <h2 className="text-2xl font-semibold text-gray-700">책 소개</h2>
        {editMode ? (
          <textarea
            value={bookEditStateValue.description}
            onChange={(e) =>
              setBookEditStateValue({
                ...bookEditStateValue,
                description: e.target.value,
              })
            }
            className="border p-2 rounded-xl w-full mt-4 focus:outline-none focus:border-darkBlue 
            focus:border-2
            transition-colors"
            rows={8}
          />
        ) : (
          <p className="text-lg text-gray-600 mt-4">{book.description}</p>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
