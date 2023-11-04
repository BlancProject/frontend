import Link from 'next/link';

export default function Header() {
  return (
    <div className="h-full border-black border-b">
      <div className=" flex justify-end space-x-4 mt-4 mb-7 mr-48">
        <div>로그인</div>
        <div>마이페이지</div>
        <div>장바구니</div>
      </div>

      <div className="flex justify-center items-center space-x-32 mb-7">
        <Link className="font-light text-6xl" href={'/'}>
          BLANC
        </Link>
        <div className="flex border w-4/12 border-black rounded-2xl">
          <input
            className="w-full py-2 px-3 rounded-2xl"
            type="text"
            placeholder="  검색어를 입력해주세요"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-2 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <div>실시간 검색량</div>
      </div>
    </div>
  );
}
