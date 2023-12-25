import { useRouter } from 'next/navigation';

import useToken from '@/hooks/useAuthCheck';

export default function MyPageLink() {
  const router = useRouter();
  const hasToken = useToken();

  const handleMyPageClick = () => {
    if (hasToken) {
      alert('로그인 먼저 해주세요');
      return;
    }
    router.push('/mypage');
  };

  return (
    <div className="cursor-pointer" onClick={handleMyPageClick}>
      마이페이지
    </div>
  );
}
