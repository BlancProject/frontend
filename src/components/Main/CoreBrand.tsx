import Image from 'next/image';

import Brand from '../../../public/img/corebrand.png';
import SubTitle from './SubTitle';

export default function CoreBrand() {
  return (
    <div className="h-64 mt-24">
      <SubTitle subtitle="주요 브랜드" />
      <Image src={Brand} alt="corebrand" width={1000} height={300} />
    </div>
  );
}
