import { useEffect, useState } from 'react';

import baseInstance from '@/api/api-instance';

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

export default function OrderProductContent({ cartItem }: Props) {
  const [productData, setProductData] = useState<ProductData | undefined>();

  useEffect(() => {
    getProductContent();
  }, []);

  const getProductContent = async () => {
    const productId = cartItem.productId;
    try {
      const response = await baseInstance.get(`/products/${productId}`);
      setProductData(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="h-40 flex items-center border-b border-solid border-gray-400">
      <div className="w-96 text-center">
        <div>{productData?.name}</div>
        <div>{productData?.description}</div>
      </div>
      <div className="w-60 text-center font-semibold">
        {productData?.price}원
      </div>
      <div className="w-28 text-center">{cartItem.productQuantity}개</div>
      <div className="w-72 text-center font-semibold">
        {productData?.price && (
          <>{productData.price * cartItem.productQuantity}원</>
        )}
      </div>
    </div>
  );
}
