import { useEffect, useState } from 'react';

import baseInstance from '@/api/api-instance';

type Orders = {
  id: number;
  totalPrice: number;
};

export default function OrderList() {
  const [list, setList] = useState<Orders[]>([]);
  const getLikeList = async () => {
    try {
      const response = await baseInstance.get('/orders/my-orders');
      setList(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getLikeList();
  }, []);

  return (
    <div>
      <div className="ml-4 leading-normal">
        <div className="text-3xl mt-1 mb-9 font-bold tracking-wider mb-12">
          주문목록
        </div>
        {list.map((content, i) => (
          <div
            className="flex font-semibold justify-between items-center h-36 w-4/5 rounded-2xl mb-7 bg-gray-200 text-3xl"
            key={i}
          >
            <div className=" ml-24">주문번호 {content.id}.</div>
            <div className=" mr-24">총 {content.totalPrice}원 결제</div>
          </div>
        ))}
      </div>
    </div>
  );
}
