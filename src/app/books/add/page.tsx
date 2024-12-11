'use client';

import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import Button from '@/components/share/Button';
import Input from '@/components/share/Input';
import ImageUpload from '@/components/add/ImageUpload';
import { useState } from 'react';
import { bookStateAdd } from '@/state/bookState';
import { bookSchema } from '@/lib/validation';

const initialBookData = {
  title: '',
  author: '',
  price: 0,
  quantity: 0,
  imageUrl: '',
  description: '',
};

const BookAdd = () => {
  const [bookData, setBookData] = useRecoilState(bookStateAdd);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const handleInputChange = (name: string, value: string | number) => {
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = bookSchema.safeParse(bookData);

    if (!result.success) {
      const newErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      if (response.ok) {
        alert('책이 등록되었습니다 📚');
        setBookData(initialBookData); // 상태 초기화
        router.push('/');
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="flex items-center justify-center my-10">
      <div className="flex flex-col gap-6 justify-center items-center max-w-lg w-full p-6">
        <h1 className="text-2xl font-semibold text-gray-800">등록할 책의 정보를 입력해주세요.</h1>
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          <ImageUpload />

          <Input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleInputChange}
            placeholder="제목을 입력하세요."
            error={errors.title}
          />

          <Input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleInputChange}
            placeholder="저자를 입력하세요."
            error={errors.author}
          />

          <Input
            type="number"
            name="price"
            value={bookData.price}
            onChange={handleInputChange}
            placeholder="가격을 입력하세요."
            error={errors.price}
          />

          <Input
            type="number"
            name="quantity"
            value={bookData.quantity}
            onChange={handleInputChange}
            placeholder="수량을 입력하세요."
            error={errors.quantity}
          />

          <textarea
            name="description"
            placeholder="책에 대한 소개를 입력해주세요."
            className="p-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-darkBlue focus:border-darkBlue transition duration-300 ease-in-out w-full"
            onChange={(e) => setBookData({ ...bookData, description: e.target.value })}
            rows={5}></textarea>
          {errors.description && <span className="text-red-500 text-sm text-end">{errors.description}</span>}

          <Button description="저장" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default BookAdd;
