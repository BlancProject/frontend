import CartBox from '@/components/Cart/Box/CartBox';
import Footer from '@/components/Cart/Footer';
import CartSubTitle from '@/components/Cart/SubTitle/CartSubTitle';

export default function CartPage() {
  return (
    <div className="all flex flex-col h-screen">
      <div className="body mx-40 pb-32">
        <CartSubTitle />
        <CartBox />
      </div>
      <Footer btnTitle="주문하기" path="order" />
    </div>
  );
}
