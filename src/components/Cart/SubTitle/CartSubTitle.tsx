import { BsCart4 } from 'react-icons/bs';

import Procedure from './Procedure';

export default function CartSubTitle() {
  return (
    <div className="subheader flex justify-between my-10">
      <div className="flex text-4xl ml-4">
        <BsCart4 />
        <div className="flex font-Inter ml-4">장바구니</div>
      </div>
      <Procedure />
    </div>
  );
}
