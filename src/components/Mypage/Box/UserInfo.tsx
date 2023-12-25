import { useEffect, useState } from 'react';
import { HiOutlinePencilSquare } from 'react-icons/hi2';

import baseInstance from '@/api/api-instance';
import useUserIdStore from '@/utils/zustand/UserIdStore';
type UserData = {
  id: number;
  nickname: string;
  email: string;
  password: string;
  address: string;
  gender: string;
  skinType: string;
  skinConcerns: string[];
};

export default function UserInfo() {
  const [userData, setUserData] = useState<UserData | null>(null);

  const { userId } = useUserIdStore();

  const getUserInfo = async () => {
    try {
      const response = await baseInstance.get(`/users/${userId}`);
      setUserData(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <div className="flex justify-between ">
        <div className="text-3xl ml-4 mt-1 mb-9 font-bold leading-normal tracking-wider">
          {userData?.nickname}님
        </div>
        <div className="flex content-center items-center">
          <HiOutlinePencilSquare />{' '}
          <button
            className="ml-2 mr-28"
            onClick={() => {
              alert('추후 업데이트 할 예정');
            }}
          >
            회원정보 수정
          </button>
        </div>
      </div>
      <div className="flex  text-lg font-bold leading-normal tracking-wider">
        <div className="w-36 pl-5 ">
          <div className="mb-5">이메일</div>
          <div className="mb-12">비밀번호</div>
          <div className="mb-5">주소</div>
          <div className="mb-5">성별</div>
          <div className="mb-5">피부타입</div>
          <div className="mb-5">피부고민</div>
        </div>
        <div className="w-132 pl-4 font-medium">
          <div className="mb-5">{userData?.email}</div>
          <div className="mb-12">추후에 업데이트할 예정</div>
          <div className="mb-5">{userData?.address}</div>
          <div className="mb-5">{userData?.gender}</div>
          <div className="mb-5">{userData?.skinType}</div>
          <div className="mb-5">{userData?.skinConcerns}</div>
        </div>
      </div>
    </div>
  );
}
