import { PiWarningCircle } from 'react-icons/pi';

import ShopContinueBtn from './ShopContinueBtn';

export default function Nothing() {
  return (
    <div className="flex flex-col items-center justify-center h-80">
      <div className="flex flex-col items-center">
        <PiWarningCircle size="80" color="#CBCBCB" />
        <div className="text-xl font-bold mt-4">
          장바구니에 담긴 상품이 없습니다.
        </div>
        <div className="text-gray-600 font-inter text-xs font-normal mt-2">
          원하는 상품을 장바구니에 담아보세요!
        </div>
        <ShopContinueBtn />
      </div>
    </div>
  );
}
