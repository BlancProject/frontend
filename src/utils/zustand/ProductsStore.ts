import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

type Products = {
  productId: number;
  quantity: number;
};

type ProductsState = {
  products: Products[];
  setProducts: (newProducts: Products[]) => void;
};

const useProductsStore = create<ProductsState>()((set) => ({
  products: [],
  setProducts: (newProducts: Products[]) => set({ products: newProducts }),
}));

export default useProductsStore;
