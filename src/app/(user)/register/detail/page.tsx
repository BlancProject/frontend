'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import baseInstance from '@/api/api-instance';
import Gender from '@/components/User/Register/RegisterDetail/Gender';
import WhatSkinProblem from '@/components/User/Register/RegisterDetail/WhatSkinProblem';
import WhatSkinType from '@/components/User/Register/RegisterDetail/WhatSkinType';
import useRegisterStore from '@/utils/zustand/RegisterStore';

export default function RegisterDetailPage() {
  const router = useRouter();
  const [gender, setGender] = useState<string>('');
  const [skinType, setSkinType] = useState<string>('');
  const [skinWorry, setSkinWorry] = useState<string[]>(['해당없음']);

  const {
    nickName,
    email,
    password,
    setNickName,
    setEmail,
    setPassword,
    setCheckPassword,
  } = useRegisterStore();

  const handleSkinWorryButtonClick = (title: string) => {
    if (title === '해당없음') {
      setSkinWorry(skinWorry.includes(title) ? [] : [title]);
    } else {
      setSkinWorry((prevItems) => {
        if (prevItems.includes('해당없음')) {
          return [title];
        } else {
          const updatedItems = prevItems.includes(title)
            ? prevItems.filter((item) => item !== title)
            : [...prevItems, title];
          return updatedItems;
        }
      });
    }
  };

  const mapKoreanToEnglish: { [key: string]: string } = {
    아토피: 'ATOPY',
    여드름: 'ACNE',
    민감성: 'SENSITIVE',
    '미백/잡티': 'WHITENINGorBLEMISHES',
    '피지/블랙헤드': 'SEBUMorBLACKHEAD',
    다크서클: 'DARKCIRCLES',
    속건조: 'DRYINSIDE',
    '주름/탄력': 'WRINKLEorELASTICITY',
    모공: 'PORE',
    홍조: 'FLUSHING',
    각질: 'CORNEOUS',
    해당없음: 'NONE',
  };

  const handleSubmit = async () => {
    // @ts-ignore
    event.preventDefault();
    if (!gender || !skinType) {
      alert('모든 항목들을 선택해주세요.');
      return;
    }
    const genderEng = gender === '남성' ? 'MALE' : 'FEMALE';
    const skinWorryEng = skinWorry.map(
      (koreanWorry) => mapKoreanToEnglish[koreanWorry]
    );

    let skinTypeEng = '';
    if (skinType === '건성') {
      skinTypeEng = 'DRY';
    } else if (skinType === '중성') {
      skinTypeEng = 'NORMAL';
    } else if (skinType === '지성') {
      skinTypeEng = 'OILY';
    } else if (skinType === '복합성') {
      skinTypeEng = 'COMBINATION';
    }
    const requestBody = {
      nickname: nickName,
      email: email,
      password: password,
      address: '대한민국',
      gender: genderEng,
      skinType: skinTypeEng,
      skinConcerns: skinWorryEng,
    };
    try {
      await baseInstance.post('/auth/signup', requestBody);
      setNickName('');
      setEmail('');
      setPassword('');
      setCheckPassword('');
      alert('회원가입이 완료되었습니다!');
      router.replace('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex flex-col mx-80 mt-16">
      <div className="font-inter text-2xl font-bold tracking-widest mb-8 text-purple-600">
        성별 - 피부타입 - 피부고민
      </div>
      <Gender gender={gender} setGender={setGender} />

      <WhatSkinType skinType={skinType} setSkinType={setSkinType} />

      <WhatSkinProblem
        skinWorry={skinWorry}
        handleSkinWorryButtonClick={handleSkinWorryButtonClick}
      />

      <button
        className="mt-7 mx-56 text-white rounded-md h-12 bg-purple-400"
        onClick={handleSubmit}
      >
        완료
      </button>
    </div>
  );
}
