'use client';
import { useRouter } from 'next/navigation';

type Props = {
  btnTitle: string;
  path: string;
};

export default function Footer({ btnTitle, path }: Props) {
  const router = useRouter();
  return (
    <div className="footer flex items-center justify-end  fixed left-0 bottom-0 w-full h-24 border-t border-gray-300 bg-gray-50">
      <div className="flex mx-20">
        {/* <div className="text-xl font-bold mt-2.5">총 주문금액</div>
        <div className="text-2xl font-bold ml-3.5 mt-2">원</div> */}
        <button
          className="w-48 h-12 rounded-md bg-purple-400 ml-10 text-white text-lg font-semibold"
          onClick={() => router.push(`/${path}`)}
        >
          {btnTitle}
        </button>
      </div>
    </div>
  );
}
