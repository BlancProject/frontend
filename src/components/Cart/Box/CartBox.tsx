'use client';

import { useEffect, useState } from 'react';

import baseInstance from '@/api/api-instance';
import useUserIdStore from '@/utils/zustand/UserIdStore';

import Nothing from '../Nothing/Nothing';
import BoxTitle from './BoxTitle';
import ProductContents from './Product/ProductContents';

type CartItem = {
  id: number;
  productQuantity: number;
  productId: number;
};

export default function CartBox() {
  const { userId } = useUserIdStore();

  const [cartList, setCartList] = useState<CartItem[] | undefined>();

  useEffect(() => {
    getCartList();
  }, []);

  const getCartList = async () => {
    try {
      const response = await baseInstance.get(`/carts/${userId}`);
      setCartList(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="cartBox min-h-fit rounded-xl shadow-my px-12">
      <BoxTitle />
      {cartList?.length === 0 ? (
        <Nothing />
      ) : (
        cartList?.map((cartItem) => (
          <ProductContents
            key={cartItem.id}
            cartItem={cartItem}
            setCartList={setCartList}
          />
        ))
      )}
    </div>
  );
}
