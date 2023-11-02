'use client';

import Image from 'next/image';
import { useState } from 'react';

import Hamburger from '../../../public/hamburger.png';
import CategoryLink from './CategoryLink';

export default function Sidebar() {
  const width = 160;
  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setX] = useState(width);

  const handleClick = () => {
    if (xPosition > 0) {
      setX(0);
      setIsOpen(true);
    } else {
      setX(width);
      setIsOpen(false);
    }
  };
  return (
    <div className="flex">
      <div
        className="border-r border-black transition duration-400 ease-in-out "
        style={{
          width: `${width}px`,
          transform: `translatex(${-xPosition}px)`,
        }}
      >
        <div className="text-lg m-3 mb-6 ">카테고리</div>
        <div className="grid grid-cols-1  mx-4 ">
          <CategoryLink link="/category1" category="카테고리 1" />
          <CategoryLink link="/category2" category="카테고리 2" />
          <CategoryLink link="/category3" category="카테고리 3" />
        </div>
      </div>
      <button
        className="transition duration-800 ease-in-out h-10 w-10 "
        style={{
          transform: `translatex(${-xPosition}px)`,
        }}
        onClick={() => handleClick()}
      >
        <Image src={Hamburger} alt="버거 버튼" width={40} height={40} />
      </button>
    </div>
  );
}
