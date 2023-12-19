import { LuShoppingBag } from 'react-icons/lu';

import ShopContinueBtn from '@/components/Cart/Nothing/ShopContinueBtn';
import Procedure from '@/components/Cart/SubTitle/Procedure';

export default function FinishPage() {
  return (
    <div className="body mx-40">
      <div className="subheader flex justify-end my-10">
        <Procedure />
      </div>
      <div className="flex flex-col items-center">
        <LuShoppingBag className="my-3" color="#adacac" size="100" />
        <div className="text-4xl my-6">감사합니다!</div>
        <div className="text-3xl my-6">주문이 완료되었습니다!</div>
        <ShopContinueBtn />
      </div>
    </div>
  );
}
