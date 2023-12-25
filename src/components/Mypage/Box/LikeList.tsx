import { useEffect, useState } from 'react';

import baseInstance from '@/api/api-instance';
import useUserIdStore from '@/utils/zustand/UserIdStore';

import Like from './Like';

type Likes = {
  id: number;
  userId: number;
  productId: number;
};

export default function LikeList() {
  const { userId } = useUserIdStore();
  const [likes, setLikes] = useState<Likes[]>([]);

  const getLikeList = async () => {
    try {
      const response = await baseInstance.get(`/likes/${userId}`);
      setLikes(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getLikeList();
  }, []);

  return (
    <div>
      <div className="ml-4 leading-normal">
        <div className="text-3xl mt-1 mb-9 font-bold tracking-wider mb-12">
          찜리스트
        </div>
        <div className="flex flex-wrap">
          {likes.map((like, i) => (
            <Like key={i} like={like} />
          ))}
        </div>
      </div>
    </div>
  );
}
