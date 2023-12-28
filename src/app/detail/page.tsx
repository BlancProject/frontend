'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GoHeart } from 'react-icons/go';
import { GoHeartFill } from 'react-icons/go';

import baseInstance from '@/api/api-instance';
import HarmfulBox from '@/components/Detail/HarmfulBox';
import ImageBox from '@/components/Detail/ImageBox';
import DetailTab from '@/components/Tab/DetailTab';
import useUserIdStore from '@/utils/zustand/UserIdStore';

interface Review {
  nickname: string;
  content: string;
}

type ProductData = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  likeCount: number;
  ingredients: {
    id: number;
    name: string;
    risk: number;
  };
  category: string;
};

export default function DetailPage() {
  const search = useSearchParams();
  const productId = search.get('id');

  const [selectedTab, setSelectedTab] = useState('상세설명');
  const [imgSelected, setImgSelected] = useState('이미지1');
  const [inputValue, setInputValue] = useState('');
  const [amount, setAmount] = useState(1);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [like, setLike] = useState<boolean>(false);

  const [productData, setProductData] = useState<ProductData | undefined>();

  const { userId } = useUserIdStore();

  const handleTabSelect = (tab: string) => {
    setSelectedTab(tab);
  };

  const getProductContents = async () => {
    try {
      const response = await baseInstance.get(`/products/${productId}`);
      setProductData(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getProductContents();
    likeCheck();
  }, [like]);

  const likeBtnHandle = async () => {
    if (like == false) {
      alert('좋아요에 추가됐습니다');
    } else {
      alert('좋아요에 제외됐습니다');
    }
    const data = {
      userId: userId,
      productId: productId,
    };
    try {
      await baseInstance.post('/likes/toggle', data);
      setLike(!like);
    } catch (error) {
      alert(error);
    }
  };

  const likeCheck = async () => {
    try {
      const response = await baseInstance.get(
        `/likes/check?userId=${userId}&productId=${productId}`
      );
      setLike(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const addToCart = async () => {
    const data = {
      productQuantity: amount,
      userId: userId,
      productId: productId,
    };
    try {
      await baseInstance.post('/carts/add', data);
      alert('장바구니에 추가됐습니다!');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center pt-12 mb-10">
        <div className="flex flex-col">
          <div className="flex flex-row justify-center">
            <ImageBox />
            <div className="flex flex-col pl-14">
              <p className="mb-3 ml-4 font-normal text-sm">브랜드</p>
              <p className="mb-3 ml-4 text-[34px] font-normal">
                {productData?.name}
              </p>
              <p className="mb-4 ml-4 text-[30px] font-bold text-red-500">
                {productData?.price}원
              </p>
              <HarmfulBox />
              <div className="flex justify-between items-center h-14  w-[600px] my-6 px-16 rounded-md border  border-gray-300 bg-gray-100">
                <div className="text-gray-700 font-inter text-base font-semibold">
                  구매수량
                </div>
                <div className="grid grid-cols-4 divide-x text-center w-16 h-6 rounded-sm border border-solid border-gray-300">
                  <button
                    onClick={async () => {
                      if (amount > 1) {
                        const newAmount = amount - 1;
                        setAmount(newAmount);
                      }
                    }}
                  >
                    -
                  </button>
                  <div className="col-span-2">{amount}</div>
                  <button
                    onClick={async () => {
                      const newAmount = amount + 1;
                      setAmount(newAmount);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex mb-2 justify-between pl-14 pr-16">
                <div>총 상품 금액</div>
                {productData?.price && <>{productData.price * amount}원</>}
              </div>
              <div className="w-[600px] h-[1px] bg-purple-400 mb-6"></div>
              <div className="flex">
                <button
                  className="w-36 h-14 mr-4 flex-shrink-0 border-2 border-solid border-purple-800 bg-white text-purple-900 text-xl"
                  onClick={() => {
                    addToCart();
                  }}
                >
                  장바구니
                </button>
                <button
                  className="w-36 h-14 mr-4 flex-shrink-0 bg-purple-800 text-white"
                  onClick={() => {
                    alert('추후에 업데이트 할 예정');
                  }}
                >
                  바로구매
                </button>
                <button
                  className="w-14 h-14 border flex-col items-center"
                  onClick={() => {
                    likeBtnHandle();
                  }}
                >
                  {like ? (
                    <GoHeartFill color="#632473" size="30" />
                  ) : (
                    <GoHeart color="#632473" size="30" />
                  )}

                  <div>{productData?.likeCount}</div>
                </button>
              </div>
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
            src="/detail.png"
            alt="상세설명 이미지"
            width={800}
            height={600}
          />
        </div>
      )}
      {selectedTab === '리뷰' && (
        <div className="flex justify-items-center justify-center py-2">
          <div className="flex-col">
            {reviews.length > 0 && (
              <div className="flex flex-col">
                {reviews.map((review, index) => (
                  <div key={index} className="flex flex-row border p-2 my-4">
                    <p className="mx-6">{review.nickname}</p>
                    <p className="mx-6">{review.content}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-row pb-6 mb-36 mt-12">
              <input
                className="w-132 h-12 border rounded-md p-2 flex-grow border-purple-200"
                type="text"
                placeholder="리뷰를 입력하세요..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />

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
          </div>
        </div>
      )}
    </>
  );
}
