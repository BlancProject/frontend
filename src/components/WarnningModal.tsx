import React, { useState } from 'react';

interface WarningModalProps {
  onClose: () => void;
}

interface HarmfulIngredientProps {
  name: string;
  description: string;
  bgColor: string;
}

const HarmfulIngredient: React.FC<HarmfulIngredientProps> = ({
  name,
  description,
  bgColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`justify-itmes-center pr-2 mr-2 mb-2 flex ${
        isHovered ? 'hovered' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`px-2 w-auto h-7 border rounded-full border-transparent flex-shrink-0`}
        style={{ backgroundColor: bgColor }}
      >
        <p className="text-center">{name}</p>
      </div>
      {isHovered && (
        <div className="absolute bg-white p-2 rounded-lg shadow-md">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const WarningModal: React.FC<WarningModalProps> = ({ onClose }) => {
  return (
    <div className="flex fixed inset-0 bg-black bg-opacity-50 items-center justify-center">
      <div className="bg-white p-8 max-w-md rounded-lg">
        <p className="text-lg font-semibold mb-2">유해 성분 경고</p>

        <div className="flex justify-end mb-2">
          <div className="flex items-center">
            <p className="text-orange-400 mr-2">위험</p>
            <p className="text-yellow-400 mr-2">주의</p>
            <p className="text-green-400">안전</p>
          </div>
        </div>

        <p className="text-sm mb-6">
          다음 성분은 피부에 민감할 수 있으며, 주의가 필요합니다.
        </p>

        <div className="flex-col">
          <div className="flex justify-start">
            <HarmfulIngredient
              name="디부틸히드록시톨루엔"
              description="이 성분은 피부에 유해할 수 있습니다."
              bgColor="rgb(254 215 170)"
            />
            <HarmfulIngredient
              name="옥시 벤존"
              description="이 성분은 피부에 민감한 경우 주의가 필요합니다."
              bgColor="rgb(254 240 138)"
            />
            <HarmfulIngredient
              name="합성 향료"
              description="향료 성분은 피부에 영향을 줄 수 있습니다."
              bgColor="rgb(187 247 208)"
            />
          </div>
          <div className="flex justify-start">
            <HarmfulIngredient
              name="이소프로필 알코올"
              description="알코올 성분은 피부 건강에 영향을 줄 수 있습니다."
              bgColor="rgb(254 215 170)"
            />
            <HarmfulIngredient
              name="파라벤"
              description="파라벤은 일부 사람들에게 피부 반응을 일으킬 수 있습니다."
              bgColor="rgb(254 215 170)"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-purple-500 text-white py-2 px-4 rounded-lg"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
