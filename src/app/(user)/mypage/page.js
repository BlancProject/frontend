'use client';

import { useState } from 'react';

import LikeList from '@/components/Mypage/Box/LikeList';
import OrderList from '@/components/Mypage/Box/OrderList';
import UserInfo from '@/components/Mypage/Box/UserInfo';
import Withdraw from '@/components/Mypage/Box/Withdraw';
import MenuBar from '@/components/Mypage/MenuBar';

export default function MyPage() {
  const [activeMenuItem, setActiveMenuItem] = useState('');

  return (
    <div className="flex mx-16 my-10 h-fit ">
      <MenuBar
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
      />
      <div className="w-full">
        <div className="ml-24">
          {activeMenuItem === '조회' && <UserInfo />}
          {activeMenuItem === '탈퇴' && <Withdraw />}
          {activeMenuItem === '주문목록' && <OrderList />}
          {activeMenuItem === '찜리스트' && <LikeList />}
        </div>
      </div>
    </div>
  );
}
