'use client';

import { useSearchParams } from 'next/navigation';

// import Navbar from '@/components/Category/MenuBar';
// import Product from '@/components/Category/Product';
import Sidebar from '@/components/Common/Sidebar';
import SearchNothing from '@/components/Search/SearchNothing';

export default function SearchPage() {
  const search = useSearchParams();
  const keyword = search.get('keyword');

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full mr-48">
        <div className="flex my-8 mx-7 items-center ">
          <div className="text-purple-600  text-2xl font-medium">{`${keyword}`}</div>
          <div className="ml-4 text-1.5xl font-medium leading-normal">
            검색결과 (전체333개의 상품)
          </div>
        </div>
        <SearchNothing keyword={keyword} />
        {/* <Navbar />
        <Product /> */}
      </div>
    </div>
  );
}
