'use client';

import { useEffect, useState } from 'react';

import baseInstance from '@/api/api-instance';
import useCartListStore from '@/utils/zustand/CartListStore';
import useRefreshStore from '@/utils/zustand/RefreshStore';
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
  const [cartList, setCartList] = useState<CartItem[] | undefined>();

  const { userId } = useUserIdStore();
  const { cartStore, setCartStore } = useCartListStore();
  const { refresh } = useRefreshStore();

  useEffect(() => {
    getCartList();
  }, [refresh]);

  const getCartList = async () => {
    try {
      const response = await baseInstance.get(`/carts/${userId}`);
      setCartList(response.data);
      setCartStore(response.data); // footer에 카트값이 있는지 없는지 알려주기위해
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
          <ProductContents key={cartItem.id} cartItem={cartItem} />
        ))
      )}
    </div>
  );
}
