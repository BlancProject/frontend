'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Footer from '@/components/Cart/Footer';
import OrderBox from '@/components/Order/OrderBox/OrderBox';
import SubHeader from '@/components/Order/SubHeader';
import useToken from '@/hooks/useAuthCheck';

export default function OrderPage() {
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
      <div className="body mx-40">
        <SubHeader />
        <OrderBox />
      </div>
      <Footer btnTitle="결제하기" path="finish" />
    </div>
  );
}
