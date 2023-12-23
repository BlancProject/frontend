'use client';
import { useRouter } from 'next/navigation';

import baseInstance from '@/api/api-instance';
import useProductsStore from '@/utils/zustand/ProductsStore';
import useUserIdStore from '@/utils/zustand/UserIdStore';

type Props = {
  btnTitle: string;
  path: string;
};

export default function Footer({ btnTitle, path }: Props) {
  const router = useRouter();
  const { products } = useProductsStore();
  const { userId } = useUserIdStore();

  const makeOrder = async () => {
    const data = {
      userId: userId,
      products: products,
    };
    try {
      const response = await baseInstance.post('/orders', data);
      const orderId = response.data.id;
      const totalPrice = response.data.totalPrice;
      router.push(`/${path}?id=${orderId}&tp=${totalPrice}`);
    } catch (error) {
      alert(error);
    }
  };

  const handleOnClick = () => {
    if (path === 'finish') {
      makeOrder();
    } else {
      router.push(`/${path}`);
    }
  };

  return (
    <div className="footer flex items-center justify-end  fixed left-0 bottom-0 w-full h-24 border-t border-gray-300 bg-gray-50">
      <div className="flex mx-20">
        {/* <div className="text-xl font-bold mt-2.5">총 주문금액</div>
        <div className="text-2xl font-bold ml-3.5 mt-2">원</div> */}
        <button
          className="w-48 h-12 rounded-md bg-purple-400 ml-10 text-white text-lg font-semibold"
          onClick={handleOnClick}
        >
          {btnTitle}
        </button>
      </div>
    </div>
  );
}
