import { useState } from 'react';

import WarningModal from '../WarnningModal';

export default function HarmfulBox() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHarmfulIngredientClick = () => {
    // 유해성분을 클릭하면 모달을 열도록 처리
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // 모달 닫기
    setIsModalOpen(false);
  };

  return (
    <div>
      {' '}
      <div
        className="cursor-pointer p-4 w-25 h-15 border rounded-3xl border-transparent w-[600px] h-[220px] bg-gray-100 hover:transform hover:scale-105 hover:shadow-md transition duration-300 ease-in-out"
        onClick={handleHarmfulIngredientClick}
      >
        <p className="pl-4 py-3 mb-3 font-bold text-[18px]">유해 성분</p>
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
  );
}
