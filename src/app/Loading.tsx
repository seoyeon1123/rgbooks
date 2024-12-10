import Image from 'next/image';
import book1 from '../../public/asserts/loading/book1.png';
import book2 from '../../public/asserts/loading/book2.png';
import book3 from '../../public/asserts/loading/book3.png';
import book4 from '../../public/asserts/loading/book4.png';

const Loading = () => {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center h-screen">
        <div className="flex flex-row gap-4 justify-center items-center">
          <Image
            src={book1}
            alt="book1"
            width={150}
            height={150}
            className="animate-jumping"
            style={{ animationDelay: '0.2s' }}
          />
          <Image
            src={book2}
            alt="book2"
            width={150}
            height={150}
            className="animate-jumping"
            style={{ animationDelay: '0.4s' }}
          />
          <Image
            src={book3}
            alt="book3"
            width={150}
            height={150}
            className="animate-jumping"
            style={{ animationDelay: '0.6s' }}
          />
          <Image
            src={book4}
            alt="book4"
            width={150}
            height={150}
            className="animate-bounce"
            style={{ animationDelay: '0.8s' }}
          />
        </div>
      </div>
    </>
  );
};

export default Loading;
