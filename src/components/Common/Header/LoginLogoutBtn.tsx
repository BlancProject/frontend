import Cookies from 'js-cookie';
import Link from 'next/link';

import useToken from '@/hooks/useAuthCheck';
import useUserIdStore from '@/utils/zustand/UserIdStore';

export default function LoginLogoutBtn() {
  const hasToken = useToken();
  const { setUserId } = useUserIdStore();
  return (
    <div>
      {hasToken ? (
        <Link href={'/login'}>로그인</Link>
      ) : (
        <button
          onClick={() => {
            Cookies.remove('token');
            // 나중에 로그아웃 api 추가 해야함
            setUserId(0);
            alert('로그아웃하셨습니다');
            window.location.replace('/');
          }}
        >
          로그아웃
        </button>
      )}
    </div>
  );
}
