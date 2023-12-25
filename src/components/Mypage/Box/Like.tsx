import { useEffect, useState } from 'react';

import baseInstance from '@/api/api-instance';
import Product from '@/components/Category/Product';

type Likes = {
  id: number;
  userId: number;
  productId: number;
};

type Props = {
  like: Likes;
};

export default function Like({ like }: Props) {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [id, setId] = useState<number>(0);

  const getProductContent = async () => {
    try {
      const response = await baseInstance.get(`/products/${like.productId}`);
      const data = response.data;
      setName(data.name);
      setPrice(data.price);
      setId(data.id);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getProductContent();
  }, []);

  return <Product name={name} price={price} id={id} />;
}
