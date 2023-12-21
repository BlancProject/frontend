'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import DetailTab from '@/components/Tab/DetailTab';
import WarningModal from '@/components/WarnningModal';

interface Review {
  nickname: string;
  content: string;
}

export default function DetailPage() {
  const [selectedTab, setSelectedTab] = useState('상세설명');
  const [imgSelected, setImgSelected] = useState('이미지1');
  const [inputValue, setInputValue] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabSelect = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleHarmfulIngredientClick = () => {
    // 유해성분을 클릭하면 모달을 열도록 처리
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // 모달 닫기
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-center pt-12">
        <div className="flex flex-col">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col">
              <Image
                src="/img/skin1.png"
                alt=""
                className={'justify-center items-center justify-items-center'}
                width={450}
                height={450}
              />
              <div className="flex pt-5 justify-center">
                <Image
                  src="/img/skin2.png"
                  alt=""
                  className={`mr-3 ${
                    imgSelected === '이미지1' ? 'border border-black' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setImgSelected('이미지1');
                  }}
                  width={80}
                  height={80}
                />
                <Image
                  src="/img/skin3.png"
                  alt=""
                  className={`${
                    imgSelected === '이미지2' ? 'border border-black' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setImgSelected('이미지2');
                  }}
                  width={80}
                  height={80}
                />
              </div>
            </div>
            <div className="flex flex-col pl-14">
              <p className="mb-3 font-normal text-sm">브랜드</p>
              <p className="mb-3 text-[22px] font-normal">상품명</p>
              <p className="mb-8 text-[22px] font-bold text-red-500">가격</p>

              <div
                className="cursor-pointer p-4 w-25 h-15 border rounded-3xl border-transparent w-[600px] h-[220px] bg-gray-100 hover:transform hover:scale-105 hover:shadow-md transition duration-300 ease-in-out"
                onClick={handleHarmfulIngredientClick}
              >
                <p className="pl-4 py-3 mb-3 font-bold text-[18px]">
                  유해 성분
                </p>
                <div className="flex-col">
                  <div className="flex justify-start ">
                    <div className="justify-itmes-center px-2 mr-2 mb-2 flex ">
                      <div className="w-40 h-7 border rounded-full border-transparent bg-orange-200 flex-shrink-0">
                        <p className="text-center">디부틸히드록시톨루엔</p>
                      </div>
                    </div>
                    <div className="justify-itmes-center px-2 mr-2 mb-2 flex">
                      <div className="px-2 h-7 border rounded-full border-transparent bg-yellow-200 flex-shrink-0">
                        <p className="text-center">옥시 벤존</p>
                      </div>
                    </div>
                    <div className="justify-itmes-center px-2 mr-2 mb-2 flex">
                      <div className="px-2 h-7 border rounded-full border-transparent bg-green-200 flex-shrink-0">
                        <p className="text-center">합성 향료</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start ">
                    <div className="justify-itmes-center px-2 mr-2 mb-2 flex">
                      <div className="px-2 h-7 border rounded-full border-transparent bg-orange-200 flex-shrink-0">
                        <p className="text-center">이소프로필 알코올</p>
                      </div>
                    </div>
                    <div className="justify-itmes-center px-2 mr-2 mb-2 flex">
                      <div className="px-2 h-7 border rounded-full border-transparent bg-orange-200 flex-shrink-0">
                        <p className="text-center">파라벤</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-10 justify-end items-end ml-auto">
                  <p className="cursor-pointer text-gray-400 hover:underline">
                    자세히 보기
                  </p>
                </div>
              </div>
              {isModalOpen && <WarningModal onClose={handleCloseModal} />}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center py-12">
        <div className="flex-1 pt-14 border-b-2 border-purple-400" />
        <DetailTab
          selectedTab={selectedTab}
          onSelectImage={(selectedImage: React.SetStateAction<string>) =>
            setImgSelected(selectedImage)
          }
          onSelectTab={handleTabSelect}
        />
        <div className="flex-1 pt-14 border-b-2 border-purple-400" />
      </div>
      {selectedTab === '상세설명' && (
        <div className="flex flex-col items-center py-4">
          <Image
            src="/img/detail.png"
            alt="상세설명 이미지"
            width={800}
            height={600}
          />
        </div>
      )}
      {selectedTab === '리뷰' && (
        <div className="flex justify-items-center justify-center py-4">
          <div className="flex-col">
            <div className="flex flex-row pb-6">
              <div className="bg-purple-100 border rounded-md p-4 flex-grow">
                <input
                  type="text"
                  placeholder="리뷰를 입력하세요..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
              <button
                onClick={() => {
                  // Handle submitting review
                  if (inputValue.trim() !== '') {
                    setReviews((prevReviews) => [
                      ...prevReviews,
                      { nickname: '닉네임', content: inputValue },
                    ]);
                    setInputValue('');

                    setIsButtonPressed(true);
                    setTimeout(() => {
                      setIsButtonPressed(false);
                    }, 300);
                  }
                }}
                className={`ml-4 px-6 py-3 rounded-md bg-purple-500 text-white transition duration-300 ${
                  isButtonPressed ? 'opacity-80' : ''
                }`}
              >
                등록
              </button>
            </div>
            {reviews.length > 0 && (
              <div className="flex flex-col">
                {reviews.map((review, index) => (
                  <div key={index} className="flex flex-row border p-2 my-4">
                    <p className="ml-8 mr-40">{review.nickname}</p>
                    <p className="mx-8">{review.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
