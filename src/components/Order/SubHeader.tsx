import { FaRegCreditCard } from 'react-icons/fa';

import Procedure from '../Cart/SubTitle/Procedure';

export default function SubHeader() {
  return (
    <div>
      <div className="subheader flex justify-between my-10">
        <div className="flex text-4xl ml-4">
          <FaRegCreditCard />
          <div className="flex font-Inter ml-4">주문</div>
        </div>
        <Procedure />
      </div>
    </div>
  );
}
