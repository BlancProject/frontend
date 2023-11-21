import BoxTitle from '@/components/Cart/Box/BoxTitle';
import ProductContents from '@/components/Cart/Box/ProductContents';
import Footer from '@/components/Cart/Footer';
import Procedure from '@/components/Cart/SubTitle/Procedure';

export default function CartPage() {
  return (
    <div className="all flex flex-col h-screen">
      <div className="body mx-40">
        <div className="subheader flex justify-between my-10">
          <div className="font-Inter text-4xl">장바구니</div>
          <Procedure />
        </div>
        <div className="cartBox min-h-fit rounded-xl shadow-my px-12">
          <BoxTitle />
          <ProductContents />
          <ProductContents />
          <ProductContents />
        </div>
      </div>
      <Footer />
    </div>
  );
}
