# Web front-end S/W 개발 직무 면접 전 과제

## 📚 프로젝트 소개 
> 온라인 서점을 위한 웹 애플리케이션 개발
> <br/>-> 상점 주인이 책을 검색하고 상세 정보를 보고 편집하며 각 책의 판매 수량을 확인할 수 있는 기능을 제공함

### 프로젝트 중점 사항
> - 책 목록 페이지 구현
> - 페이지네이션 적용(한 페이지당 10개 항목)
> - 제목과 저자로 필터링할 수 있는 검색 기능 구현
> - 책 상세 정보 페이지 / 뷰 구현
> - 책 추가/ 제거 및 수정 가능


## 🕸️ 배포 사이트

> [rgbooks.vercel.app](rgbooks.vercel.app)


## 버전
> - "next": "13.5.7"
> - "react":"^18"
> - "tailwindcss": "^3"
> - "ts-jest": "^29.2.5"

## 폴더 구조
```
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂books
 ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂search
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┗ 📜bookApi.ts
 ┃ ┣ 📂books
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📂add
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂search
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜Font.css
 ┃ ┃ ┗ 📜globals.css
 ┃ ┣ 📜Loading.tsx
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂add
 ┃ ┃ ┗ 📜ImageUpload.tsx
 ┃ ┣ 📂bookDetail
 ┃ ┃ ┗ 📜EditModeButtons.tsx
 ┃ ┣ 📂bookEdit
 ┃ ┃ ┣ 📜BookInfo.tsx
 ┃ ┃ ┗ 📜formatPrice.ts
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Error.tsx
 ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂main
 ┃ ┃ ┗ 📜BooksList.tsx
 ┃ ┗ 📂share
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┗ 📜Input.tsx
 ┣ 📂lib
 ┃ ┣ 📜db.ts
 ┃ ┣ 📜supabaseClient.ts
 ┃ ┗ 📜validation.ts
 ┣ 📂services
 ┃ ┗ 📜bookService.ts
 ┣ 📂state
 ┃ ┗ 📜bookState.ts
 ┗ 📂types
 ┃ ┗ 📜bookTypes.ts
```

## 🏁 프로젝트 실행
### Installation
```
npm install
```
### Develop Mode
```
npm run dev
```
### Production
```
npm run build
```
----

## 📚 사용 기술 스택
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/><img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=react-query&logoColor=white"/> <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/> <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/> <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white"/> <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=Prisma&logoColor=white"/> <img src="https://img.shields.io/badge/Jest-%23C21325?style=flat-square&logo=jest&logoColor=white"/> <img src="https://img.shields.io/badge/React Testing Library-E33332?style=flat-square&logo=testing-library&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>

---

## 상태 관리
<details>

 <summary>상태 관리 보기</summary>
  
  ### 상태 관리 라이브러리

  - **React Query**: 서버 데이터를 가져오고 캐싱하는 데 사용됩니다. 예를 들어, 도서 목록 데이터를 서버에서 가져오는 데 `useQuery` 훅을 사용합니다.
  - **Recoil**: 애플리케이션의 전역 상태 관리를 위해 사용됩니다. 컴포넌트 간 상태 공유와 업데이트가 간편합니다. 예를 들어, 책 등록 폼에서 사용자의 입력 데이터를 상태로 관리하는 데 `useRecoilState`를 사용합니다.

  ### 상태 흐름

  - `useQuery` 훅을 통해 `books` 데이터를 가져옵니다.
  - 데이터 로딩 중에는 로딩 컴포넌트를 표시하고, 에러가 발생하면 에러 메시지를 표시합니다.
  - `books` 데이터가 존재하지 않으면 "책이 없습니다."라는 메시지를 표시합니다.
  - `Recoil`을 통해 책 등록 폼의 상태를 관리합니다. 사용자가 폼을 작성할 때 입력값을 `bookStateAdd` 상태에 저장합니다.

  ### 상태 업데이트

  상태 값은 `useQuery`와 `useRecoilState`를 사용하여 관리됩니다. `react-query`는 서버 데이터를 자동으로 캐시하고, 상태가 변경되면 컴포넌트가 자동으로 리렌더링됩니다. `Recoil`은 애플리케이션 내에서 전역적으로 상태를 관리할 수 있게 해줍니다.

  ```tsx
  const {
    data: books = [],
    error,
    isLoading,
  } = useQuery<Book[], Error>({
    queryKey: ['books'],
    queryFn: fetchBooks,
  });
```

``` const [bookData, setBookData] = useRecoilState(bookStateAdd);```

</details>

---

## 🖥️ 화면 구성

### 1 . 📖 **[메인페이지 (책 목록 페이지)](##)**
<details>
  <summary>메인페이지 (책 목록 페이지)</summary>

  | **메인페이지 (책 목록 페이지)** |  
  |:------------:|  
  | ![main](https://velog.velcdn.com/images/leeeee/post/edbc9764-3998-4075-b7e9-f1d137dc1b64/image.png) |  

  ### 1. **책 목록 데이터 로드**
  - **`/api/books` 엔드포인트**에서 데이터를 요청하여 책 목록을 가져옵니다.
  - **React Query의 `useQuery` 훅**을 사용하여 비동기 데이터를 효율적으로 처리합니다.
    - **데이터 상태 관리**:
      - **로딩 중**: `Loading` 컴포넌트를 표시.
      - **에러 발생**: `ErrorMessage` 컴포넌트를 표시.
      - **성공 시**: 책 목록 데이터를 `BooksList` 컴포넌트로 렌더링.
    - **캐싱 기능**: 새로운 데이터 요청이 필요하지 않은 경우, 저장된 캐시 데이터를 활용하여 빠르게 데이터를 표시합니다.

  ### 2. **페이지네이션**
  - **페이지당 10개씩** 데이터를 표시합니다.
  - 페이지 하단에는 **페이지네이션 네비게이션 버튼**을 제공합니다.
    - **탐색 기능**:
      - 사용자는 이전, 다음, 또는 특정 페이지로 이동할 수 있습니다.
    - **상태 관리**:
      - 현재 페이지는 **강조 표시**됩니다.
      - 첫 번째 및 마지막 페이지에서는 **이전/다음 버튼 비활성화**.
  - 이러한 방식으로 직관적이고 효율적인 탐색 환경을 제공합니다.

  ## 💡 요약
  - **데이터 로드**: `useQuery`를 활용한 비동기 데이터 처리 및 캐싱.
  - **UI 구성**: 로딩, 에러, 성공 상태에 따라 유연한 UI 표시.
  - **페이지네이션**: 사용자 친화적인 탐색 환경 제공.
</details>

---

### 2 . 📖 **[책 상세 정보 페이지](##)**
<details>
  <summary>책 상세 정보 페이지</summary>

  책 상세 정보 페이지는 **특정 도서의 정보를 확인**하고, **수정**하거나 **삭제**할 수 있는 기능을 제공합니다. 페이지는 다음과 같은 주요 기능으로 구성되어 있습니다.

  |  **책 상세정보 페이지**  | **수정 모드**  |
  |:------------:|:------------:|
  | ![book-detail](https://velog.velcdn.com/images/leeeee/post/0deccb1e-7533-43e8-bacb-54bee7b1aac9/image.png) | ![edit-mode](https://velog.velcdn.com/images/leeeee/post/c3c56247-9a1d-4879-bf30-5d2baf75e309/image.png) |

  ### 📚 도서 정보 가져오기
  - **`useEffect`** 훅을 사용하여 페이지가 렌더링될 때, 도서 ID를 기반으로 해당 도서 정보를 서버에서 비동기로 가져옵니다.
  - **`fetchBookById` API**를 호출하여 데이터를 받아오며, 성공 시 다음 상태를 업데이트합니다:
    - **`book`** 상태: 렌더링에 사용되는 데이터.
    - **Recoil 상태 (`bookEditState`)**: 수정 모드에서 사용되는 데이터.
  - **실패 시** 에러 메시지를 설정하여 `ErrorMessage` 컴포넌트로 표시합니다.

  ### ✏️ 도서 수정 기능
  1. **수정 모드 활성화**  
     - **수정 버튼**을 클릭하면 수정 모드로 전환됩니다.
     - 수정 모드에서는 제목, 저자, 수량, 가격, 설명 등의 필드가 **`input`** 또는 **`textarea`**로 변환됩니다.
  2. **실시간 수정**  
     - **Recoil 상태 (`bookEditState`)**를 활용하여 입력값을 즉시 반영합니다.
     - 필드 수정 시, 상태가 실시간으로 업데이트되어 사용자 경험이 향상됩니다.
  3. **수정 내용 저장**  
     - **저장 버튼**을 클릭하여 수정된 데이터를 저장합니다.
     - `handleSave` 함수는 Recoil 상태에서 데이터를 가져와 새로운 객체를 생성하고, **`updateBookById` API**를 호출하여 서버에 저장합니다.
     - 서버에서 수정된 데이터를 반환받아 **`book` 상태**를 업데이트하며, 수정 모드를 종료합니다.
     - API 호출 실패 시 에러 메시지를 표시합니다.

  ### 🗑️ 도서 삭제 기능
  1. **삭제 모드 활성화**  
     - **삭제 버튼**을 클릭하면 해당 도서를 삭제할 수 있습니다.
  2. **삭제 동작**  
     - `handleDelete` 함수는 **`deleteBookById` API**를 호출하여 서버에서 특정 도서를 삭제합니다.
     - 삭제 성공 시:
       - **알림 메시지**가 표시됩니다.
       - 사용자가 **홈 페이지(`/`)**로 리다이렉트됩니다.
     - 삭제 실패 시 **에러 메시지**가 표시됩니다.

  ## 💡 주요 기능 요약
  - **도서 정보 확인**: 비동기 API 호출로 정보를 가져오고, 페이지에 렌더링합니다.
  - **수정 기능**: 제목, 저자, 수량, 가격, 설명 등을 수정하고 저장할 수 있습니다.
  - **삭제 기능**: 특정 도서를 삭제하여 데이터베이스에서 제거할 수 있습니다.
</details>

---

### 3 . 📖 **[책 추가 페이지](##)**
<details>
  <summary>책 추가 페이지</summary>

  | **책 추가 페이지** |  
  |:------------:|  
  | ![add-book](https://velog.velcdn.com/images/leeeee/post/e1597c0a-1553-416e-ac4b-9a56ee3a7bd5/image.png) |  

  ### 1. **책 정보 입력**
  사용자는 책의 **제목**, **저자**, **가격**, **수량**, **설명**을 입력할 수 있습니다. 입력된 데이터는 **`useRecoilState`**를 사용하여 상태로 관리됩니다.

  - **입력 필드**:
    - 제목, 저자, 가격, 수량, 책 설명을 위한 입력란.
    - 책 이미지 업로드 기능(`ImageUpload` 컴포넌트).
    
  ### 2. **유효성 검사**
  - 책 정보를 제출할 때, **`bookSchema`**를 사용하여 유효성 검사를 수행합니다.
  - 검사에 실패하면, 각 필드에 대한 **에러 메시지**가 표시됩니다.

  ### 3. **책 추가**
  - **`useMutation`**을 활용하여 책 정보를 서버에 POST 요청을 통해 추가합니다.
  - 성공적으로 책이 등록되면, **알림**을 표시하고, 초기 상태로 되돌린 후 홈 페이지로 리다이렉트됩니다.

  ### 4. **에러 처리**
  - 책 추가 과정에서 오류가 발생하면 **에러 메시지**가 표시됩니다.
</details>

---

### 4 . 📖 **[검색 기능 구현 Header](##)**
<details>
  <summary>검색 기능 구현 Header</summary>

  |  **Header**  | **검색 결과 반환 컴포넌트 (/search)** |
  |:------------:|:------------:|
  | ![Header](https://velog.velcdn.com/images/leeeee/post/eb409901-cdf8-439a-ad4e-2cf66e4029fd/image.png) | ![search](https://velog.velcdn.com/images/leeeee/post/ccf117f3-bef1-40a0-a650-9a9d4133332a/image.png) |

  - **기능**: 검색창과 드롭다운 메뉴를 통해 사용자가 검색 옵션을 선택하고 검색어를 입력할 수 있도록 함.
  - **상태 관리** :
    - `isDropdownOpen`: 드롭다운 메뉴의 열림/닫힘 상태를 관리.
    - `selectedOption`: 선택된 검색 옵션을 저장 (기본값: '통합검색').
    - `searchTerm`: 사용자가 입력한 검색어를 저장.
    
  - **핵심 로직**:
    - 드롭다운을 클릭하면 `isDropdownOpen` 상태가 변경되고, 그에 따라 드롭다운 메뉴가 보임.
    - 검색어와 선택된 옵션을 이용해 검색 요청을 `/search` URL로 보내며, URL 쿼리 파라미터로 `option`과 `query`를 전달.
    - 검색 버튼 클릭 시 `handleSearch` 함수가 호출되어 해당 쿼리 파라미터를 포함하는 URL로 라우팅.
</details>

---

## API 정의서: 책 관리 시스템

이 문서는 책 관리 시스템의 API 정의서를 포함합니다. 이 시스템은 책을 관리하고, 책 목록을 조회하며, 책을 추가, 수정, 삭제할 수 있는 기능을 제공합니다.

#### [API 정의서](#)

<details>
  <summary>API 목록</summary>

  ## 1. **책 목록 조회 (GET /api/books)**

  - **목적**: 모든 책 목록을 조회
  - **메소드**: `GET`
  - **URL**: `/api/books`
  - **쿼리 파라미터**:
    - `author` (선택적): 특정 저자의 책만 조회
    - `priceMin` (선택적): 최소 가격으로 필터링
    - `priceMax` (선택적): 최대 가격으로 필터링
    - `page` (선택적): 페이지 번호
    - `limit` (선택적): 한 페이지에 표시할 책의 수
  - **응답 예시**:
    ```json
    {
      "data": [
        {
          "id": 32,
          "title": "엄마의 대화력",
          "author": "허승희",
          "price": 19000,
          "quantity": 12,
          "imageUrl": "https://image.jpg",
          "description": "책 설명"
        }
     ]
    }

    ```

  ### 2. **책 상세 조회 (GET /api/books/:id)**

  - **목적**: 책의 상세 정보를 조회
  - **메소드**: `GET`
  - **URL**: `/api/books/:id`
  - **URL 파라미터**:
    - `id`: 책의 고유 ID
  - **응답 예시**:
    ```json
    {
      "id": 32,
      "title": "엄마의 대화력",
      "author": "허승희",
      "price": 19000,
      "quantity": 12,
      "imageUrl": "https://image.jpg",
      "description": "책 설명"
    }
    ```

  ### 3. **책 추가 (POST /api/books)**

  - **목적**: 새 책을 추가
  - **메소드**: `POST`
  - **URL**: `/api/books`
  - **요청 예시**:
    ```json
    {
      "title": "새로운 책 제목",
      "author": "저자 이름",
      "price": 15000,
      "quantity": 5,
      "imageUrl": "https://image.jpg",
      "description": "책 설명"
    }
    ```
  - **응답 예시**:
    ```json
    {
      "id": 33,
      "title": "새로운 책 제목",
      "author": "저자 이름",
      "price": 15000,
      "quantity": 5,
      "imageUrl": "https://image.jpg",
      "description": "책 설명"
    }
    ```

  ### 4. **책 정보 수정 (PUT /api/books/:id)**

  - **목적**: 기존 책 정보를 수정
  - **메소드**: `PUT`
  - **URL**: `/api/books/:id`
  - **URL 파라미터**:
    - `id`: 수정할 책의 고유 ID
  - **요청 예시**:
    ```json
    {
      "title": "수정된 책 제목",
      "author": "저자 이름",
      "price": "수정된 가격",
      "quantity": "수정된 수량",
      "imageUrl": "https://image.jpg",
      "description": "수정된 책 설명"
    }
    ```
  - **응답 예시**:
    ```json
    {
      "id": 32,
      "title": "수정된 책 제목",
      "author": "저자 이름",
      "price": "수정된 가격",
      "quantity": "수정된 수량",
      "imageUrl": "https://image.jpg",
      "description": "수정된 책 설명"
    }
    ```

  ### 에러 응답 예시

  - **책이 존재하지 않을 경우** (404):
    ```json
    {
      "error": "책을 찾을 수 없습니다."
    }
    ```

  - **잘못된 요청** (400):
    ```json
    {
      "error": "잘못된 요청입니다."
    }
    ```


### Prisma 모델

이 시스템에서 사용하는 Prisma 모델은 다음과 같습니다:

```prisma
model Book {
  id          Int       @id @default(autoincrement())
  title       String
  author      String
  price       Float
  quantity    Int
  imageUrl    String?
  description String
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

</details>

---

## 테스트 코드

이 프로젝트는 **Jest**와 **React Testing Library**를 사용하여 테스트가 작성되었습니다. 주요 기능에 대한 단위 테스트를 포함하고 있으며, 테스트는 각 컴포넌트의 렌더링, 동작, API 호출 등을 확인하는 데 중점을 두고 있습니다.

### 사용된 주요 도구
- **Jest**: JavaScript 테스트 프레임워크
- **React Testing Library**: React 컴포넌트의 렌더링 및 사용자 상호작용을 테스트하는 도구
- **Next.js**의 `useSearchParams` 훅을 모킹하여 쿼리 파라미터를 테스트

### 테스트 코드
`SearchPage` 컴포넌트에 대한 테스트 예시입니다. 이 테스트는 쿼리 파라미터가 `"허승희"`로 설정된 경우, 해당 저자의 책 목록을 정상적으로 렌더링하는지 확인합니다.

<details>
  <summary>테스트 코드 보기</summary>

```tsx
import { render, screen, waitFor } from '@testing-library/react';
import SearchPage from '@/app/search/page';
import { useSearchParams } from 'next/navigation';

// useSearchParams 훅을 모킹
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

describe('SearchPage', () => {
  it('should display search results for author "허승희"', async () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: (key: string) => {
        if (key === 'query') return '허승희';
        if (key === 'option') return '통합검색';
        return null;
      },
    });

    const mockResults = [
      {
        id: 32,
        title: '엄마의 대화력',
        author: '허승희',
        price: 19000,
        quantity: 12,
        imageUrl:
          'https://hfaergimikwprxpcquxh.supabase.co/storage/v1/object/public/book-image/1733901369593_9791191378634.jpg',
        description:
          '수많은 육아서와 교육 전문가들은 세상의 엄마들에게 이런 부담을 지우고 있다...',
        createdAt: '2024-12-11T07:16:37.699Z',
        updatedAt: '2024-12-11T07:16:37.699Z',
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResults),
    });

    render(<SearchPage />);

    await waitFor(() => {
      expect(screen.getByText('엄마의 대화력')).toBeInTheDocument();
    });
  });
});
```

</detail>
