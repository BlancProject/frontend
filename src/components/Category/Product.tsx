import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  name: string;
  price: number;
  id: number;
};

const Product = ({ name, price, id }: Props) => {
  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/detail?id=${id}`);
  };

  return (
    <button
      onClick={handleProductClick}
      className="w-60 h-96 pt-4 focus:outline-none"
    >
      <div className="flex justify-center">
        <Image
          src="/img/skin1.png"
          alt=""
          className={'justify-center items-center justify-items-center'}
          width={220}
          height={220}
        />
      </div>
      <div className="flex flex-col mt-5 items-center">
        <p className="mb-2 font-bold text-gray-400"> 브랜드</p>
        <p className="mb-2 text-gray-700"> {name}</p>
        <p className="mb-2 text-[19px] font-bold text-red-500">{price}</p>
      </div>
    </button>
  );
};

export default Product;
