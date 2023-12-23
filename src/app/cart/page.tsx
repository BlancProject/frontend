'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import CartBox from '@/components/Cart/Box/CartBox';
import Footer from '@/components/Cart/Footer';
import CartSubTitle from '@/components/Cart/SubTitle/CartSubTitle';
import useToken from '@/hooks/useAuthCheck';

export default function CartPage() {
  const router = useRouter();
  const hasToken = useToken();

  useEffect(() => {
    if (hasToken) {
      alert('로그인 먼저 해주세요!');
      router.push('/login');
    }
  }, [hasToken]);

  return (
    <div className="all flex flex-col h-screen">
      <div className="body mx-40 pb-32">
        <CartSubTitle />
        <CartBox />
      </div>
      <Footer btnTitle="주문하기" path="order" />
    </div>
  );
}
