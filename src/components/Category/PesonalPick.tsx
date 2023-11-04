import { useState } from 'react';

const PersonalPick = () => {
  const [skinType, setSkinType] = useState<string[]>([]);
  const [skinConcern, setSkinConcern] = useState<string[]>([]);
  const [isToggled, setIsToggled] = useState(false); // 토글 상태를 저장하기 위한 상태 변수

  const handleToggle = () => {
    setIsToggled(!isToggled); // 토글 상태를 변경하는 함수
    if (!isToggled) {
      console.log('선택한 피부타입:', skinType);
      console.log('선택한 피부고민:', skinConcern);
    }
  };

  const handleSkinTypeToggle = (type: string) => {
    if (skinType.includes(type)) {
      setSkinType([]); // 이미 선택된 피부 타입을 다시 클릭하면 선택을 취소합니다.
    } else {
      setSkinType([type]); // 새로운 피부 타입을 선택하면 이전 선택을 대체합니다.
    }
  };

  const handleSkinConcernToggle = (concern: string) => {
    if (concern === '해당없음') {
      if (skinConcern.includes('해당없음')) {
        setSkinConcern([]); // '해당없음'을 다시 클릭하면 모든 선택을 취소합니다.
      } else {
        setSkinConcern(['해당없음']); // '해당없음'을 클릭하면 그것만 선택되고 다른 선택은 취소됩니다.
      }
    } else {
      if (skinConcern.includes('해당없음')) {
        setSkinConcern([concern]); // 다른 피부고민을 클릭하면 '해당없음'을 제외하고 그 피부고민만 선택됩니다.
      } else {
        setSkinConcern((prev) =>
          prev.includes(concern)
            ? prev.filter((c) => c !== concern)
            : [...prev, concern],
        ); // 그렇지 않으면 기존 로직에 따라 선택/취소를 수행합니다.
      }
    }
  };

  const handleFindProduct = () => {
    console.log('선택한 피부타입:', skinType);
    console.log('선택한 피부고민:', skinConcern);
  };

  return (
    <div className="rounded-xl max-w-6xl mx-auto px-4 bg-gray-200 p-4 shadow-md">
      <div className="mt-6 mb-6 flex items-center">
        <span className="text-[17px] text-black mr-4 font-bold px-5">
          피부타입
        </span>
        {['건성', '중성', '지성', '복합성', '수부지'].map((type) => (
          <button
            key={type}
            onClick={() => handleSkinTypeToggle(type)}
            className={`text-[14px] rounded-2xl mr-2 px-3 py-1 ${
              skinType.includes(type)
                ? 'bg-purple-400 text-white'
                : 'bg-white text-black'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="mb-4 flex items-center">
        <span className="text-[17px] text-black mr-4 font-bold px-5">
          피부고민
        </span>
        {[
          '해당없음',
          '아토피',
          '여드름',
          '민감성',
          '탄력',
          '건조',
          '모공',
          '피지과다',
          '색소침착',
          '주름',
          '톤업',
        ].map((concern) => (
          <button
            key={concern}
            onClick={() => handleSkinConcernToggle(concern)}
            className={`text-[14px] rounded-2xl mr-2 px-3 py-1 ${
              skinConcern.includes(concern)
                ? 'bg-purple-400 text-white'
                : 'bg-white text-black'
            }`}
          >
            {concern}
          </button>
        ))}
      </div>

      <div className="flex justify-end items-center mt-4">
        <span className="mr-2">내 피부 맞춤</span>
        <button
          onClick={handleToggle}
          className={`w-16 h-8 rounded-full bg-purple-400 relative`}
        >
          <span
            className={`absolute top-1/2 transform -translate-y-1/2 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isToggled ? 'translate-x-6' : 'translate-x-0'
            }`}
          ></span>
          <span
            className={`absolute top-1/2 transform -translate-y-1/2 ${
              isToggled ? 'left-1' : 'left-9'
            } text-white text-xs font-bold`}
          >
            {isToggled ? 'ON' : 'OFF'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default PersonalPick;
