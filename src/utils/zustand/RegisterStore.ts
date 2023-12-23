import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type RegisterState = {
  nickName: string;
  setNickName: (nickname: string) => void;
  email: string;
  setEmail: (mail: string) => void;
  password: string;
  setPassword: (pw: string) => void;
  checkPassword: string;
  setCheckPassword: (pwc: string) => void;
};

const useRegisterStore = create<RegisterState>()(
  persist(
    (set) => ({
      nickName: '',
      setNickName: (nickname: string) => set(() => ({ nickName: nickname })),
      email: '',
      setEmail: (mail: string) => set(() => ({ email: mail })),
      password: '',
      setPassword: (pw: string) => set(() => ({ password: pw })),
      checkPassword: '',
      setCheckPassword: (pwc: string) => set(() => ({ checkPassword: pwc })),
    }),
    { name: 'useRegisterStore' }
  )
);

export default useRegisterStore;
