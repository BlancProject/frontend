import BestProduct from './BestProduct';
import CoreBrand from './CoreBrand';
import Swiper from './Swiper';

export default function MainLayout() {
  return (
    <div className="w-2/3">
      <Swiper />
      <BestProduct />
      <CoreBrand />
    </div>
  );
}
