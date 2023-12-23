'use client';

import { useEffect, useState } from 'react';

import baseInstance from '@/api/api-instance';
import useProductsStore from '@/utils/zustand/ProductsStore';
import useUserIdStore from '@/utils/zustand/UserIdStore';

import OrderBoxTitle from './OrderBoxTitle';
import OrderProductContent from './OrderProductContent';

type CartItem = {
  id: number;
  productQuantity: number;
  productId: number;
};

export default function OrderBox() {
  const { userId } = useUserIdStore();

  const [cartList, setCartList] = useState<CartItem[] | undefined>();

  const { setProducts } = useProductsStore();

  useEffect(() => {
    getCartList();
  }, []);

  const getCartList = async () => {
    try {
      const response = await baseInstance.get(`/carts/${userId}`);
      setCartList(response.data);
      const products = response.data.map(
        ({
          productQuantity,
          productId,
        }: {
          productQuantity: number;
          productId: number;
        }) => ({
          productId,
          quantity: productQuantity,
        })
      );
      setProducts(products);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="cartBox min-h-fit px-12">
      <OrderBoxTitle />
      {cartList?.map((cartItem, i) => (
        <OrderProductContent key={i} cartItem={cartItem} />
      ))}
    </div>
  );
}
