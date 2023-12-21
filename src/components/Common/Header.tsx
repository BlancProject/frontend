'use client';

import Cookies from 'js-cookie';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import useToken from '@/hooks/useAuthCheck';
import useUserIdStore from '@/utils/zustand/UserIdStore';

export default function Header() {
  const hasToken = useToken();

  const [searchQuery, setSearchQuery] = useState('');

  const { setUserId } = useUserIdStore();

  const pathname = usePathname();
  const router = useRouter();
  if (
    pathname === '/login' ||
    pathname === '/register' ||
    pathname === '/register/detail'
  ) {
    return null;
  }

  const handleSearch = () => {
    router.push(`/search?keyword=${searchQuery}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="h-full border-black border-b">
      <div className=" flex justify-end space-x-4 mt-4 mb-4 mr-48">
        {hasToken ? (
          <Link href={'/login'}>로그인</Link>
        ) : (
          <button
            onClick={() => {
              Cookies.remove('token');
              // 나중에 로그아웃 api 추가 해야함
              setUserId(0);
              alert('로그아웃하셨습니다');
              window.location.replace('/');
            }}
          >
            로그아웃
          </button>
        )}

        <div>마이페이지</div>

        <Link href={'/cart'}>장바구니</Link>
      </div>

      <div className="flex justify-center items-center space-x-32 mb-7">
        <Link className="font-light text-6xl " href={'/'}>
          BLANC
        </Link>
        <div className="searchbox flex items-center border w-4/12 border-black rounded-2xl">
          <input
            className="w-full py-2 px-5 rounded-2xl outline-none"
            type="text"
            placeholder="검색어를 입력해주세요"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            onKeyPress={handleKeyPress}
          />
          <BsSearch
            size="22"
            className="mr-4 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
        <div>실시간 검색량</div>
      </div>
    </div>
  );
}
