import SkinWorryBtn from '../SkinWorryBtn';
import SubTitle from '../SubTitle';

type Props = {
  skinWorry: string[];
  handleSkinWorryButtonClick: (title: string) => void;
};

export default function WhatSkinProblem({
  skinWorry,
  handleSkinWorryButtonClick,
}: Props) {
  const skinWorries = [
    '아토피',
    '여드름',
    '민감성',
    '미백/잡티',
    '피지/블랙헤드',
    '다크서클',
    '속건조',
    '주름/탄력',
    '모공',
    '홍조',
    '각질',
    '해당없음',
  ];
  return (
    <div>
      <SubTitle title="피부 고민이 있나요?" marginBottom="mb-1" />
      <div className="mb-6 text-gray-500 font-inter text-base font-normal ">
        정확한 분석을 위해 고민을 모두 선택해주세요
      </div>
      <div>
        {skinWorries.map((title, index) => (
          <SkinWorryBtn
            key={index}
            title={title}
            skinWorry={skinWorry}
            handleSkinWorryButtonClick={handleSkinWorryButtonClick}
          />
        ))}
      </div>
    </div>
  );
}
