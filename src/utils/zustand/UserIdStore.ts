import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserIdState = {
  userId: number;
  setUserId: (id: number) => void;
};

const useUserIdStore = create<UserIdState>()(
  persist(
    (set) => ({
      userId: 0,
      setUserId: (id: number) => set(() => ({ userId: id })),
    }),
    {
      name: 'userIdStore',
    }
  )
);

export default useUserIdStore;
