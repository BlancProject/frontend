import BestProduct from './BestProduct';
import CoreBrand from './CoreBrand';
import Swiper from './Swiper';

export default function MainLayout() {
  return (
    <div className="w-full mr-52">
      <Swiper />
      <BestProduct />
      <CoreBrand />
    </div>
  );
}
