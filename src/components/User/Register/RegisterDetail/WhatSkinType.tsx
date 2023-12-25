import SkinTypeBtn from '../SkinTypeBtn';
import SubTitle from '../SubTitle';

type Props = {
  skinType: string;
  setSkinType: (skinType: string) => void;
};

export default function WhatSkinType({ skinType, setSkinType }: Props) {
  const skinTypes = ['건성', '중성', '지성', '복합성'];
  return (
    <div>
      <SubTitle title="어떤 피부 타입이신가요?" marginBottom="mb-5" />
      <div className="mb-5">
        {skinTypes.map((title, index) => (
          <SkinTypeBtn
            title={title}
            key={index}
            skinType={skinType}
            setSkinType={setSkinType}
          />
        ))}
      </div>
    </div>
  );
}
