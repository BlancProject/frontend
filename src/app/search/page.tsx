'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import baseInstance from '@/api/api-instance';
import Navbar from '@/components/Category/MenuBar';
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

export default function SearchPage() {
  const search = useSearchParams();
  const keyword = search.get('keyword');

  const [page, setPage] = useState<number>(0);
  const [totlaPage, setTotalPage] = useState<number>(0);

  const [keywordProducts, setKeywordProducts] = useState<Product[]>([]);

  const [totalElements, setTotalElements] = useState<number>(0);

  const [sortOption, setSortOption] = useState<string>('name');

  useEffect(() => {
    getSearchProductWithSort();
  }, [keyword, page, sortOption]);

  const getSearchProductWithSort = async () => {
    try {
      const response = await baseInstance.get(
        `/products/search/${keyword}?page=${page}&size=10&sort=${sortOption}`
      );
      setTotalElements(response.data.totalElements);
      setTotalPage(response.data.totalPages);
      setKeywordProducts(response.data.content);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full mr-48">
        <div className="flex my-8 mx-7 items-center ">
          <div className="text-purple-600  text-2xl font-medium">{`${keyword}`}</div>
          <div className="ml-4 text-1.5xl font-medium leading-normal">
            검색결과 (전체 {totalElements}개의 상품)
          </div>
        </div>
        {keywordProducts.length === 0 ? (
          <SearchNothing keyword={keyword} />
        ) : (
          <div>
            <Navbar setSortOption={setSortOption} />
            {keywordProducts.map((product, i) => (
              <Product
                key={i}
                name={product.name}
                price={product.price}
                id={product.id}
              />
            ))}
          </div>
        )}
        {totalElements === 0 ? (
          <div></div>
        ) : (
          <PageNation totalPage={totlaPage} setPage={setPage} />
        )}
      </div>
    </div>
  );
}
