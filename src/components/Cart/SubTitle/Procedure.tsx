import { MdKeyboardArrowRight } from 'react-icons/md';

import InfoLabel from './InfoLabel';

export default function Procedure() {
  return (
    <div className="flex mt-3">
      <InfoLabel infoLabel="장바구니" />
      <MdKeyboardArrowRight size="22" color="B2B2B2" />
      <InfoLabel infoLabel="주문/결제" />
      <MdKeyboardArrowRight size="22" color="B2B2B2" />
      <InfoLabel infoLabel="완료" />
    </div>
  );
}
