import Footer from '@/components/Cart/Footer';
import OrderBoxTitle from '@/components/Order/OrderBox/OrderBoxTitle';
import OrderProductContent from '@/components/Order/OrderBox/OrderProductContent';
import SubHeader from '@/components/Order/SubHeader';

export default function OrderPage() {
  return (
    <div className="all flex flex-col h-screen">
      <div className="body mx-40">
        <SubHeader />
        <div className="cartBox min-h-fit px-12">
          <OrderBoxTitle />
          <OrderProductContent />
          <OrderProductContent />
          <OrderProductContent />
        </div>
      </div>
      <Footer btnTitle="결제하기" path="finish" />
    </div>
  );
}
