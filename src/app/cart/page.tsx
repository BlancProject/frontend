import { BsCart4 } from 'react-icons/bs';

import BoxTitle from '@/components/Cart/Box/BoxTitle';
// import ProductContents from '@/components/Cart/Box/ProductContents';
import Footer from '@/components/Cart/Footer';
import Nothing from '@/components/Cart/Nothing/Nothing';
import Procedure from '@/components/Cart/SubTitle/Procedure';

export default function CartPage() {
  return (
    <div className="all flex flex-col h-screen">
      <div className="body mx-40">
        <div className="subheader flex justify-between my-10">
          <div className="flex text-4xl ml-4">
            <BsCart4 />
            <div className="flex font-Inter ml-4">장바구니</div>
          </div>
          <Procedure />
        </div>
        <div className="cartBox min-h-fit rounded-xl shadow-my px-12">
          <BoxTitle />
          <Nothing />
          {/* <ProductContents />
          <ProductContents />
          <ProductContents /> */}
        </div>
      </div>
      <Footer btnTitle="주문하기" path="order" />
    </div>
  );
}
