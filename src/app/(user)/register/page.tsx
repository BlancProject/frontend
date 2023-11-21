'use client';
import { useRouter } from 'next/navigation';

import InputBox from '@/components/User/InputBox';

export default function RegisterPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col  mx-80 mt-16">
      <div className="font-inter text-4xl font-bold tracking-widest mb-8">
        BLANC
      </div>
      <div className="text-purple-600 font-inter text-3xl font-bold tracking-widest mb-9">
        회원가입을 위해 <br />
        정보를 입력해주세요
      </div>
      <InputBox title="닉네임" placeholder="홍길동" />
      <InputBox title="아이디" placeholder="id" />
      <InputBox title="비밀번호" placeholder="password" />
      <InputBox title="비밀번호 확인" placeholder="password" />
      <button
        className="mt-9 mx-56 text-white rounded-md h-12 bg-purple-400"
        onClick={() => router.push('/register/detail')}
      >
        다음
      </button>
    </div>
  );
}
