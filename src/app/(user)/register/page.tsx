'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import InputBox from '@/components/User/Register/InputBox';
import useRegisterStore from '@/utils/zustand/RegisterStore';

export default function RegisterPage() {
  const router = useRouter();

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const {
    setNickName,
    setEmail,
    setPassword,
    setCheckPassword,
    nickName,
    email,
    password,
    checkPassword,
  } = useRegisterStore();

  const handleSubmit = () => {
    // @ts-ignore
    event.preventDefault();
    if (!nickName || !email || !password || !checkPassword) {
      alert('모든 필수 항목들을 입력해주세요.');
      return;
    }

    if (password !== checkPassword) {
      setPasswordMismatch(true);
      return;
    }

    setPasswordMismatch(false);

    router.push('/register/detail');
  };

  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col  mx-80 mt-16">
      <div className="font-inter text-4xl font-bold tracking-widest mb-8">
        BLANC
      </div>
      <div className="text-purple-600 font-inter text-3xl font-bold tracking-widest mb-9">
        회원가입을 위해 <br />
        정보를 입력해주세요
      </div>
      <InputBox
        value={nickName}
        title="닉네임"
        placeholder="홍길동"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNickName(e.target.value)
        }
        onKeyPress={handleOnKeyPress}
      />
      <InputBox
        value={email}
        title="이메일"
        placeholder="blanc@example.com"
        type="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        onKeyPress={handleOnKeyPress}
      />
      <InputBox
        value={password}
        title="비밀번호"
        placeholder="password"
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        onKeyPress={handleOnKeyPress}
      />
      <InputBox
        value={checkPassword}
        title="비밀번호 확인"
        placeholder="password"
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCheckPassword(e.target.value)
        }
        onKeyPress={handleOnKeyPress}
      />
      {passwordMismatch && (
        <div className="text-red-500">
          비밀번호와 비밀번호 확인이 일치하지 않습니다.
        </div>
      )}
      <button
        className="mt-9 mx-56 text-white rounded-md h-12 bg-purple-400"
        onClick={handleSubmit}
      >
        다음
      </button>
    </div>
  );
}
