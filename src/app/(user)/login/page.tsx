import Link from 'next/link';

import LoginBox from '@/components/User/Login/LoginBox';
export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link className="text-6xl font-light mb-10" href={'/'}>
        BLANC
      </Link>

      <LoginBox />
      <div>
        아이디가 없으시다면?
        <Link href={'/register'} className="ml-2">
          회원가입
        </Link>
      </div>
    </div>
  );
}
