'use client';
import { useRouter } from 'next/navigation';

export default function ShopContinueBtn() {
  const router = useRouter();
  return (
    <button
      className="w-28 h-8 mt-4 rounded-md border border-solid border-purple-600 text-purple-600 text-xs font-bold"
      onClick={() => router.push('/')}
    >
      쇼핑 계속하기
    </button>
  );
}
