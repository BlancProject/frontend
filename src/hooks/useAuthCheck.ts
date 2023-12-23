'use client';

import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import useRefreshStore from '@/utils/zustand/RefreshStore';

const useToken = () => {
  const [hasToken, setHasToken] = useState<boolean>(false);

  const { refresh } = useRefreshStore();

  useEffect(() => {
    const token = Cookies.get('token');
    setHasToken(!token);
  }, [refresh]);

  return hasToken;
};

export default useToken;
