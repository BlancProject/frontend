import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GoCheckCircle } from 'react-icons/go';

import baseInstance from '@/api/api-instance';
import useUserIdStore from '@/utils/zustand/UserIdStore';

import LoginInput from './LoginInput';

export default function LoginTab() {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const { setUserId } = useUserIdStore();

  const router = useRouter();

  const handleSubmit = async () => {
    // @ts-ignore
    event.preventDefault();
    if (!id || !pw) {
      alert('모든 필수 항목들을 입력해주세요.');
      return;
    }
    const data = { email: id, password: pw };
    try {
      const response = await baseInstance.post('/auth/login', data);
      if (response.status == 200) {
        const token = response.data.token;
        Cookies.set('token', token, { expires: 1 });
        setUserId(response.data.id);
        router.replace('/');
      }
    } catch {
      alert('로그인 실패');
    }
  };

  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  return (
    <div>
      <div className="inputBox max-w-md w-full h-32 rounded-2xl border border-stone-300 border-solid grid grid-cols-1 divide-y mt-9 mb-4">
        <LoginInput
          type="text"
          value={id}
          placeHolder="아이디"
          way="rounded-t-2xl"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setId(e.target.value)
          }
          onKeyPress={handleOnKeyPress}
        />
        <LoginInput
          type="password"
          value={pw}
          placeHolder="비밀번호"
          way="rounded-b-2xl"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPw(e.target.value)
          }
          onKeyPress={handleOnKeyPress}
        />
      </div>
      <div className="mb-9 pl-3 flex">
        <GoCheckCircle className="mr-2" size="22" color="BAB4B4" />
        로그인 상태 유지
      </div>
      <button
        className="w-full p-2 h-14 font-bold text-xl bg-purple-500 text-white rounded-md cursor-pointer"
        onClick={handleSubmit}
      >
        로그인
      </button>
    </div>
  );
}
