import db from '@/lib/db';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const option = url.searchParams.get('option');
  const query = url.searchParams.get('query');

  if (!option || !query || query.trim() === '') {
    return new Response(JSON.stringify({ error: '옵션과 검색어를 모두 입력해주세요.' }), { status: 400 });
  }

  // 사용자 입력에서 공백 제거
  const queryWithoutSpaces = query.replace(/\s+/g, '');

  try {
    let books;

    // 검색 옵션에 따라 쿼리 수행
    if (option === '제목') {
      books = await db.book.findMany({
        where: {
          title: {
            mode: 'insensitive',
            contains: query, // 원본 검색어 사용
          },
        },
      });
    } else if (option === '저자') {
      books = await db.book.findMany({
        where: {
          author: {
            mode: 'insensitive',
            contains: query, // 원본 검색어 사용
          },
        },
      });
    } else if (option === '통합검색') {
      books = await db.book.findMany({
        where: {
          OR: [
            {
              title: {
                mode: 'insensitive',
                contains: query,
              },
            },
            {
              author: {
                mode: 'insensitive',
                contains: query,
              },
            },
          ],
        },
      });
    } else {
      return new Response(JSON.stringify({ error: '유효하지 않은 검색 옵션입니다.' }), { status: 400 });
    }

    const filteredBooks = books.filter((book) => {
      const titleWithoutSpaces = book.title.replace(/\s+/g, '');
      const authorWithoutSpaces = book.author.replace(/\s+/g, '');

      // 공백 제거한 제목이나 저자가 검색어와 포함되는지 확인
      return titleWithoutSpaces.includes(queryWithoutSpaces) || authorWithoutSpaces.includes(queryWithoutSpaces);
    });

    return new Response(JSON.stringify(filteredBooks), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: '검색에 실패했습니다.' }), { status: 500 });
  }
}
