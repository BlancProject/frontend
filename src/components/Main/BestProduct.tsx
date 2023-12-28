'use client';

import Product from '../Category/Product';
import SubTitle from './SubTitle';

export default function BestProduct() {
  return (
    <div className=" h-80 my-20">
      <SubTitle subtitle="가장 많이 팔린 상품 (미완)" />
      <div className="flex ">
        <Product name="1등 상품" price={11111} id={1} />
        <Product name="2등 상품" price={22222} id={1} />
        <Product name="3등 상품" price={33333} id={1} />
        <Product name="4등 상품" price={44444} id={1} />
      </div>
    </div>
  );
}
