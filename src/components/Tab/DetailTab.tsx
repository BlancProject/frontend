'use client';

import React, { Dispatch, SetStateAction } from 'react';

interface DetailTabProps {
  selectedTab: string;
  onSelectImage: Dispatch<SetStateAction<string>>;
  onSelectTab: (tab: string) => void;
}

const DetailTab: React.FC<DetailTabProps> = ({
  selectedTab,
  onSelectImage,
  onSelectTab,
}) => {
  return (
    <div className="flex justify-center w-2/3">
      <a
        href="#"
        className={`flex-1 flex items-center justify-center py-4 w-60 font-bold ${
          selectedTab === '상세설명'
            ? 'bg-white text-black border-x-2 border-t-2 border-purple-400'
            : 'bg-gray-100 text-gray-500 border-b-2 border-purple-400'
        }`}
        onClick={(e) => {
          e.preventDefault();
          onSelectTab('상세설명');
          onSelectImage('detail.png');
        }}
      >
        <span>상세설명</span>
      </a>
      <a
        href="#"
        className={`flex-1 flex items-center justify-center py-4 w-60 font-bold ${
          selectedTab === '리뷰'
            ? 'bg-white text-black border-x-2 border-t-2 border-purple-400'
            : 'bg-gray-100 text-gray-500 border-b-2 border-purple-400'
        }`}
        onClick={(e) => {
          e.preventDefault();
          onSelectTab('리뷰');
        }}
      >
        <span>리뷰</span>
      </a>
    </div>
  );
};

export default DetailTab;
