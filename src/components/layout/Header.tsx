'use client';

import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/16/solid';
import { BookOpenIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'; // usePathname을 추가
import Link from 'next/link';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('통합검색');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname(); // usePathname 훅으로 경로 가져오기

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      option: selectedOption,
      query: searchTerm,
    }).toString();

    router.push(`/search?${queryParams}`);
  };

  useEffect(() => {
    if (pathname === '/') {
      setSearchTerm('');
    }
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-around items-center p-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <BookOpenIcon className="h-9 w-9" />
        <Link href={'/'} className="text-3xl font-bold text-darkBlue sm:hidden xs:hidden font-LOTTERIADDAG">
          알지북스
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-full">
          <div className="flex w-[400px] xs:w-[250px] items-center border border-gray-300 rounded-full bg-white shadow-md focus-within:ring-2 focus-within:ring-darkBlue ">
            <button
              onClick={toggleDropdown}
              className="flex 
              xs:w-16 sm:w-16 
              items-center px-3 py-2 border-r text-gray-700 focus:outline-none text-sm
               xs:text-xs sm:text-xs
               xs:px-2 sm:px-2">
              {selectedOption}
              {isDropdownOpen ? <ChevronUpIcon className="size-6 pl-2" /> : <ChevronDownIcon className="size-6 pl-2" />}
            </button>

            {isDropdownOpen && (
              <ul className="absolute z-10 top-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg *:text-sm sm:*:text-xs xs:*:text-xs">
                <li
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionSelect('통합검색')}>
                  통합검색
                </li>
                <li
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionSelect('제목')}>
                  제목
                </li>
                <li
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionSelect('저자')}>
                  저자
                </li>
              </ul>
            )}

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="검색어를 입력해주세요"
              className="flex-grow pl-3 pr-10 py-2 sm:text-xs xs:text-xs xs:pl-1 sm:pl-1
              sm:pr-5 xs:pr-5
               text-gray-600 placeholder-gray-400 border-none rounded-full focus:outline-none"
            />

            <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
              <MagnifyingGlassIcon onClick={handleSearch} className="h-5 w-5 text-gray-500 hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/books/add"
        className="flex items-center sm:px-2 xs:px-2  px-3 py-2 bg-darkBlue text-white rounded-full hover:bg-mediumBlue transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <PlusIcon className="size-5" />
        <span className="ml-1 text-sm font-semibold xs:hidden sm:hidden">책 추가</span>
      </Link>
    </div>
  );
};

export default Header;
