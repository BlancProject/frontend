import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';

export default function SnsTab() {
  return (
    <div>
      <button className="flex items-center justify-center w-full p-2 h-14 font-medium text-lg bg-yellow-300 text-yellow-950 rounded-md cursor-pointer mb-5">
        <RiKakaoTalkFill className="mr-2" size="22" color="38230D" />
        카카오로 로그인
      </button>
      <button className="flex items-center justify-center w-full p-2 h-14 font-medium text-lg rounded-2xl border rounded-md cursor-pointer mb-5">
        <FcGoogle className="mr-2" size="22" />
        Google로 로그인
      </button>
      <button className="flex items-center justify-center w-full p-2 h-14 font-medium text-lg bg-green-500 text-white rounded-md cursor-pointer">
        <SiNaver className="mr-2" size="22" />
        네이버로 로그인
      </button>
    </div>
  );
}
