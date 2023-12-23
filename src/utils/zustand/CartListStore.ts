import { create } from 'zustand';

type CartList = {
  id: number;
  productQuantity: number;
  productId: number;
};

type CartListState = {
  cartStore: CartList[];
  setCartStore: (newCartList: CartList[]) => void;
};

const useCartListStore = create<CartListState>()((set) => ({
  cartStore: [],
  setCartStore: (newCartList: CartList[]) => set({ cartStore: newCartList }),
}));

export default useCartListStore;
