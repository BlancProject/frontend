import Cookies from 'js-cookie';

import baseInstance from '@/api/api-instance';
import useRefreshStore from '@/utils/zustand/RefreshStore';
import useUserIdStore from '@/utils/zustand/UserIdStore';

export default function Withdraw() {
  const { userId, setUserId } = useUserIdStore();
  const { setRefresh } = useRefreshStore();

  const userWithDraw = async () => {
    const confirmed = window.confirm('회원탈퇴를 진행하시겠습니까?');

    if (!confirmed) {
      return;
    }
    try {
      await baseInstance.delete(`/users/${userId}`);
      Cookies.remove('token');
      setUserId(0);
      setRefresh((refresh) => refresh * -1);
      alert('탈퇴되었습니다.');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="ml-4 leading-normal">
      <div className="text-3xl mt-1 mb-9 font-bold tracking-wider mb-12">
        회원탈퇴를 진행하시겠습니까?
      </div>
      <div className="text-red-600 font-inter mb-32">
        * 회원정보는 모두 사라집니다
      </div>
      <button
        className="w-28 ml-72 h-8 mt-4 rounded-md border border-solid border-purple-600 text-purple-600 text-xs font-bold"
        onClick={() => {
          userWithDraw();
        }}
      >
        회원 탈퇴
      </button>
    </div>
  );
}
