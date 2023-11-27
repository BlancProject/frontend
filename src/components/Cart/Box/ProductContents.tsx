'use client';

import { useState } from 'react';
import { MdOutlineCheckBox } from 'react-icons/md';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

export default function ProductContents() {
  const price = 35000;
  const [amount, setAmount] = useState<number>(1);
  const [check, setCheck] = useState<boolean>(false);
  return (
    <div className="flex h-40 border-t border-gray-400 items-center">
      {check ? (
        <MdOutlineCheckBox
          onClick={() => {
            setCheck(false);
          }}
          className="mx-8"
          size="22"
          color="#BB10D7"
        />
      ) : (
        <MdOutlineCheckBoxOutlineBlank
          onClick={() => {
            setCheck(true);
          }}
          className="mx-8"
          size="22"
        />
      )}
      <div className="productName w-2/6">
        <div>라로슈포제</div>
        <div>라로슈포제 유비데아 안뗼톤업선크림</div>
      </div>
      <div className="price w-32 text-center ">{price}원</div>
      <div className="btn w-32 mx-2  flex justify-center">
        <div className="grid grid-cols-4 divide-x text-center w-16 h-6 rounded-sm border border-solid border-gray-300">
          <button
            onClick={() => {
              if (amount > 1) {
                setAmount(amount - 1);
              }
            }}
          >
            -
          </button>
          <div className="col-span-2">{amount}</div>
          <button
            onClick={() => {
              setAmount(amount + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="totalPrice w-32 text-center ">{price * amount}원</div>
      <div className="option flex w-44 items-center flex-col">
        <button className="w-28 h-7 mb-2 rounded-md border border-solid text-gray-600 text-sm font-semibold transition-colors duration-300 hover:text-purple-600 hover:border-purple-600 hover:shadow-md">
          바로구매
        </button>
        <button className="flex items-center justify-center w-28 h-7 rounded-md border border-solid text-gray-600 text-sm font-semibold transition-colors duration-300 hover:text-purple-600 hover:border-purple-600 hover:shadow-md">
          <RxCross2 className="mr-1" size="17" />
          삭제
        </button>
      </div>
    </div>
  );
}
