import { RxCross2 } from 'react-icons/rx';

import baseInstance from '@/api/api-instance';

type CartItem = {
  id: number;
  productQuantity: number;
  productId: number;
};

type Props = {
  id: number;
  setCartList: React.Dispatch<React.SetStateAction<CartItem[] | undefined>>;
};

export default function OptionBtns({ id, setCartList }: Props) {
  const removeCartList = async () => {
    try {
      await baseInstance.delete(`/carts/${id}`);
      setCartList((prevCartList) =>
        prevCartList?.filter((item) => item.id !== id)
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="option flex w-44 items-center flex-col">
      <button className="w-28 h-7 mb-2 rounded-md border border-solid text-gray-600 text-sm font-semibold transition-colors duration-300 hover:text-purple-600 hover:border-purple-600 hover:shadow-md">
        바로구매
      </button>
      <button
        className="flex items-center justify-center w-28 h-7 rounded-md border border-solid text-gray-600 text-sm font-semibold transition-colors duration-300 hover:text-purple-600 hover:border-purple-600 hover:shadow-md"
        onClick={() => {
          removeCartList();
        }}
      >
        <RxCross2 className="mr-1" size="17" />
        삭제
      </button>
    </div>
  );
}
