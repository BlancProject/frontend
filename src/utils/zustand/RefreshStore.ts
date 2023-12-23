import { create } from 'zustand';

type refreshState = {
  refresh: number;

  setRefresh: (key: React.SetStateAction<number>) => void;
};

const useRefreshStore = create<refreshState>()((set) => ({
  refresh: 1,
  setRefresh: (key) =>
    set((state) => ({
      refresh: typeof key === 'function' ? key(state.refresh) : key,
    })),
}));

export default useRefreshStore;
