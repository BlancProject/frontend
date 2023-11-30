'use client';
import { useRouter } from 'next/navigation';
import { PiWarningCircle } from 'react-icons/pi';

export default function Nothing() {
  const router = useRouter();
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
        <button
          className="w-28 h-8 mt-4 rounded-md border border-solid border-purple-600 text-purple-600 text-xs font-bold"
          onClick={() => router.push('/')}
        >
          쇼핑 계속하기
        </button>
      </div>
    </div>
  );
}
