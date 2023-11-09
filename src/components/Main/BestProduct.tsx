'use client';

import Product from '../Category/Product';
import SubTitle from './SubTitle';

export default function BestProduct() {
  return (
    <div className=" h-80 my-20">
      <SubTitle subtitle="가장 많이 팔린 상품" />
      <div className="flex ">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
