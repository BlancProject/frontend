import React, { useState } from 'react';

const Navbar = () => {
  // 현재 선택된 메뉴 항목을 저장하는 상태
  const [selected, setSelected] = useState('');

  return (
    <nav>
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="flex space-x-4 border-gray-200 border-t-2 border-b">
          <div className="flex items-center space-x-1">
            {/* 각 메뉴 항목마다 클릭 시 setSelected 함수를 호출하여 상태를 업데이트합니다. */}
            <a
              href="#"
              className={`flex items-center py-4 pl-6 text-gray-700 ${
                selected === '인기순' ? 'font-bold' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                setSelected('인기순');
              }}
            >
              <span>인기순</span>
            </a>
            <p className="text-gray-200 font-extralight px-6">|</p>
            <a
              href="#"
              className={`py-4 text-gray-700 hover:text-gray-900 ${
                selected === '신상품순' ? 'font-bold' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                setSelected('신상품순');
              }}
            >
              신상품순
            </a>
            <p className="text-gray-200 font-extralight px-6">|</p>
            <a
              href="#"
              className={`py-4 text-gray-700 hover:text-gray-900 ${
                selected === '판매순' ? 'font-bold' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                setSelected('판매순');
              }}
            >
              판매순
            </a>
            <p className="text-gray-200 font-extralight px-6">|</p>
            <a
              href="#"
              className={`py-4 text-gray-700 hover:text-gray-900 ${
                selected === '낮은 가격순' ? 'font-bold' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                setSelected('낮은 가격순');
              }}
            >
              낮은 가격순
            </a>
            <p className="text-gray-200 font-extralight px-6">|</p>
            <a
              href="#"
              className={`py-4 text-gray-700 hover:text-gray-900 ${
                selected === '할인율순' ? 'font-bold' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                setSelected('할인율순');
              }}
            >
              할인율순
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
