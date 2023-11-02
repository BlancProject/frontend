'use client';

import Header from '@/components/Header';
import MenuBar from '@/components/MenuBar';
import PersonalPick from '@/components/PesonalPick';
import Product from '@/components/Product';

export default function Main() {
  return (
    <>
      <div className="mx-auto px-4">
        <p className="text-xl pl-60 py-5">스킨케어</p>
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
    </>
  );
}
