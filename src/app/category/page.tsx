'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import baseInstance from '@/api/api-instance';
import Navbar from '@/components/Category/MenuBar';
import PersonalPick from '@/components/Category/PesonalPick';
import Product from '@/components/Category/Product';
import PageNation from '@/components/Common/PageNation';
import Sidebar from '@/components/Common/Sidebar';
import SearchNothing from '@/components/Search/SearchNothing';

type Ingredient = {
  id: number;
  name: string;
  risk: number;
};

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  likeCount: number;
  ingredients: Ingredient[];
  category: string;
};

export default function CategoryPage() {
  const search = useSearchParams();
  const category = search.get('');

  const [sortOption, setSortOption] = useState<string>('name');
  const [page, setPage] = useState<number>(0);
  const [totlaPage, setTotalPage] = useState<number>(0);

  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  const getCategoryProduct = async () => {
    try {
      const response = await baseInstance.get(
        `/products/search/category/${category}?page=${page}&size=10`
      );
      setCategoryProducts(response.data.content);
      setTotalPage(response.data.totalPages);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getCategoryProduct();
  }, [category, page]);

  //SUNCARE 메이크업 연결되어있는거 나중에 수정

  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <div className="max-w-5xl px-4">
          <p className="text-xl pl-9 py-5">
            {category === 'Skincare' && '스킨케어'}
            {category === 'SUNCARE' && '메이크업'}
            {category === 'cleansing' && '클렌징'}
          </p>
          <PersonalPick />
          <br />
          <Navbar setSortOption={setSortOption} />
          <br />
          {categoryProducts.length === 0 ? (
            <SearchNothing keyword={category} />
          ) : (
            <div>
              {categoryProducts.map((product, i) => (
                <Product
                  key={i}
                  name={product.name}
                  price={product.price}
                  id={product.id}
                />
              ))}
            </div>
          )}

          {totlaPage === 0 ? (
            <div></div>
          ) : (
            <PageNation totalPage={totlaPage} setPage={setPage} />
          )}
        </div>
      </div>
    </>
  );
}
