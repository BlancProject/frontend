'use client';

import { useEffect, useState } from 'react';

import MenuBar from '@/components/Category/MenuBar';
import PersonalPick from '@/components/Category/PesonalPick';
import Product from '@/components/Category/Product';
import Sidebar from '@/components/Common/Sidebar';

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const [title, setTitle] = useState(' ');
  console.log(params.category);
  useEffect(() => {
    if (params.category == 'skincare') {
      setTitle('스킨케어');
    }
    if (params.category == 'makeup') {
      setTitle('메이크업');
    }
    if (params.category == 'clensing') {
      setTitle('클렌징');
    }
  }, []);
  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <div className="max-w-5xl px-4">
          <p className="text-xl pl-9 py-5">{title}</p>
          <PersonalPick />
          <br />
          <MenuBar />
          <br />
          <div className="flex flex-col items-center">
            <div className="flex flex-row justify-between">
              <div className="mr-4">
                <Product />
              </div>
              <div className="mr-4">
                <Product />
              </div>
              <div className="mr-4">
                <Product />
              </div>
              <div className="mr-4">
                <Product />
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="flex flex-row justify-between my-w-full max-w-6xl mb-16 mt-5">
                <div className="mr-4">
                  <Product />
                </div>
                <div className="mr-4">
                  <Product />
                </div>
                <div className="mr-4">
                  <Product />
                </div>
                <div className="mr-4">
                  <Product />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
