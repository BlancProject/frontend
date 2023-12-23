'use client';

import { useEffect, useState } from 'react';
import { MdOutlineCheckBox } from 'react-icons/md';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

import baseInstance from '@/api/api-instance';

import AmountBtn from './AmountBtn';
import OptionBtns from './OptionBtns';

type Props = {
  cartItem: {
    id: number;
    productQuantity: number;
    productId: number;
  };
};

type ProductData = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  likeCount: number;
  ingredients: {
    id: number;
    name: string;
    risk: number;
  };
  category: string;
};

export default function ProductContents({ cartItem }: Props) {
  const [amount, setAmount] = useState<number>(1);
  const [check, setCheck] = useState<boolean>(false);
  const [productData, setProductData] = useState<ProductData | undefined>();

  useEffect(() => {
    getProductContent();
  }, []);

  const getProductContent = async () => {
    const productId = cartItem.productId;
    try {
      const response = await baseInstance.get(`/products/${productId}`);
      setProductData(response.data);
      setAmount(cartItem.productQuantity);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex h-40 border-t border-gray-400 items-center">
      {check ? (
        <MdOutlineCheckBox
          onClick={() => {
            setCheck(false);
          }}
          className="mx-8"
          size="22"
          color="#BB10D7"
        />
      ) : (
        <MdOutlineCheckBoxOutlineBlank
          onClick={() => {
            setCheck(true);
          }}
          className="mx-8"
          size="22"
        />
      )}
      <div className="productName w-2/6">
        <div>{productData?.name}</div>
        <div>{productData?.description}</div>
      </div>
      <div className="price w-32 text-center ">{productData?.price}원</div>
      <div className="btn w-32 mx-2  flex justify-center">
        <AmountBtn amount={amount} setAmount={setAmount} id={cartItem.id} />
      </div>
      <div className="totalPrice w-32 text-center ">
        {productData?.price && <>{productData.price * amount}원</>}
      </div>
      <OptionBtns id={cartItem.id} />
    </div>
  );
}
