'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import GenderBtn from '@/components/User/Register/GenderBtn';
import SkinTypeBtn from '@/components/User/Register/SkinTypeBtn';
import SkinWorryBtn from '@/components/User/Register/SkinWorryBtn';
import SubTitle from '@/components/User/Register/SubTitle';

export default function RegisterDetailPage() {
  const router = useRouter();
  const [gender, setGender] = useState<string>('');
  const [skinType, setSkinType] = useState<string>('');
  const [skinWorry, setSkinWorry] = useState<string[]>([]);

  const handleSkinWorryButtonClick = (title: string) => {
    if (title === '해당없음') {
      setSkinWorry([]);
    } else {
      const updatedItems: string[] = skinWorry.includes(title)
        ? skinWorry.filter((item) => item !== title)
        : [...skinWorry, title];
      setSkinWorry(updatedItems);
    }
  };

  const skinTypes = ['건성', '중성', '지성', '복합성', '수부지'];
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
    <div className="flex flex-col  mx-80 mt-16">
      <div className="font-inter text-2xl font-bold tracking-widest mb-8 text-purple-600">
        성별 - 피부타입 - 피부고민
      </div>
      <SubTitle title="성별" marginBottom="mb-4" />
      <div className="mb-7">
        <GenderBtn title="남성" gender={gender} setGender={setGender} />
        <GenderBtn title="여성" gender={gender} setGender={setGender} />
      </div>

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

      <button
        className="mt-7 mx-56 text-white rounded-md h-12 bg-purple-400"
        onClick={() => router.push('/')}
      >
        완료
      </button>
    </div>
  );
}
