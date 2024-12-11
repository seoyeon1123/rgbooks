import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/16/solid';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className="flex justify-around items-center p-4 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <BookOpenIcon className="size-9" />
          <Link href={'/'} className="text-3xl font-bold text-darkBlue sm:hidden xs:hidden">
            알지북스
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-full">
            <select className="absolute sm:pr-2 sm:pl-2 xs:pr-2 xs:pl-2 left-0 top-1/2 transform -translate-y-1/2 p-3 pl-3 pr-10 border-l border-gray-300 rounded-full text-gray-700 focus:outline-none">
              <option value={'제목'}>제목</option>
              <option value={'저자'}>저자</option>
            </select>

            <input
              type="text"
              placeholder="검색어를 입력해주세요"
              className="p-3 text-sm sm:pr-3 sm:pl-16 xs:pr-3 xs:pl-16 pr-10 border border-gray-300 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-60 xs:w-60 w-96 pl-32"
            />

            <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
              <MagnifyingGlassIcon className="size-7 hover:cursor-pointer text-gray-500 " />
            </div>
          </div>
        </div>

        <Link
          href="/books/add"
          className="flex items-center sm:px-2 sm:py-2 xs:px-2 xs:py-2 px-5 py-3 bg-darkBlue text-white rounded-full hover:bg-mediumBlue transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 *:text-sm">
          <PlusIcon className="size-5 " />
          <span className="ml-2 font-semibold xs:hidden sm:hidden">책 추가</span>
        </Link>
      </div>
    </>
  );
};

export default Header;
