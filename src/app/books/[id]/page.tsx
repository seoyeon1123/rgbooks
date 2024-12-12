'use client';

import Loading from '@/app/Loading';
import BookInfo from '@/components/bookEdit/BookInfo';
import { bookEditState } from '@/state/bookState';
import { Book } from '@/types/bookTypes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import EditModeButtons from '@/components/bookDetail/EditModeButtons';
import ErrorMessage from '@/components/common/Error';
import { deleteBookById, fetchBookById, updateBookById } from '@/app/api/bookApi';

const BookDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [bookEditStateValue, setBookEditStateValue] = useRecoilState(bookEditState);
  const router = useRouter();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await fetchBookById(id);
        setBook(data);
        setBookEditStateValue({
          title: data.title,
          author: data.author,
          price: data.price,
          quantity: data.quantity,
          imageUrl: data.imageUrl,
          description: data.description,
        });
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('알 수 없는 오류가 발생했습니다.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id, setBookEditStateValue]);

  const handleDelete = async () => {
    try {
      await deleteBookById(id);
    } catch (error) {
      setError('책 삭제에 실패했습니다.');
    }
    alert('해당 도서가 삭제되었습니다.');
    router.push('/');
  };

  const handleSave = async () => {
    if (!book) {
      setError('책 정보를 찾을 수 없습니다.');
      return;
    }

    const updatedBook = {
      id: book.id,
      ...bookEditStateValue,
      price: parseFloat(bookEditStateValue.price.toString()),
      quantity: parseInt(bookEditStateValue.quantity.toString()),
    };

    try {
      const updatedData = await updateBookById(id, updatedBook);
      setBook(updatedData);
      setEditMode(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">책 정보를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto px-6  pb-20 xl:px-[300px] relative">
      <EditModeButtons
        editMode={editMode}
        onSave={handleSave}
        onEdit={() => setEditMode(true)}
        onDelete={handleDelete}
      />
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

          <div className="flex-1 space-y-6 text-start ">
            <h1 className="text-4xl xs:text-2xl sm:text-2xl font-extrabold text-[#D84B16]">
              {editMode ? (
                <input
                  type="text"
                  value={bookEditStateValue.title}
                  onChange={(e) =>
                    setBookEditStateValue((prevState) => ({
                      ...prevState,
                      title: e.target.value,
                    }))
                  }
                  style={{
                    width: `${Math.max(bookEditStateValue.title.length + 3, 1)}ch`,
                  }}
                  className="text-4xl font-extrabold text-[#D84B16]
                    border-b-2 border-gray-300
                    bg-transparent focus:outline-none focus:border-darkBlue transition-colors"
                />
              ) : (
                book.title
              )}
            </h1>

            <div className="space-y-2">
              <div
                className="flex flex-col 
              xs:items-end sm:items-end
              items-start justify-start gap-3 ">
                <BookInfo
                  label="저자"
                  value={bookEditStateValue.author}
                  editMode={editMode}
                  onChange={(value) =>
                    setBookEditStateValue((prevState) => ({
                      ...prevState,
                      author: value.toString(),
                    }))
                  }
                  type="text"
                />
                <BookInfo
                  label="수량"
                  value={bookEditStateValue.quantity}
                  editMode={editMode}
                  onChange={(value) =>
                    setBookEditStateValue((prevState) => ({
                      ...prevState,
                      quantity: parseInt(value.toString(), 10),
                    }))
                  }
                  type="number"
                />
                <BookInfo
                  label="가격"
                  value={bookEditStateValue.price}
                  editMode={editMode}
                  onChange={(value) =>
                    setBookEditStateValue((prevState) => ({
                      ...prevState,
                      price: parseFloat(value.toString()),
                    }))
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
              setBookEditStateValue((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
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
