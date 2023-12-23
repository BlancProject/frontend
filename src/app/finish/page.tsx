'use client';
import { useSearchParams } from 'next/navigation';
import { LuShoppingBag } from 'react-icons/lu';

import ShopContinueBtn from '@/components/Cart/Nothing/ShopContinueBtn';
import Procedure from '@/components/Cart/SubTitle/Procedure';

export default function FinishPage() {
  const search = useSearchParams();
  const orderId = search.get('id');
  const totalPrice = search.get('tp');

  console.log(orderId, totalPrice);
  return (
    <div className="body mx-40">
      <div className="subheader flex justify-end my-10">
        <Procedure />
      </div>
      <div className="flex flex-col items-center">
        <LuShoppingBag className="my-3" color="#adacac" size="100" />
        <div className="text-4xl my-5">주문번호 {orderId}번 주문 완료!</div>
        <div className="text-xl my-4">
          총 {totalPrice}원 결제 완료하였습니다.
        </div>
        <ShopContinueBtn />
      </div>
    </div>
  );
}
