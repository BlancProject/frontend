'use client';

import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const useToken = () => {
  const [hasToken, setHasToken] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get('token');
    setHasToken(!token);
  }, []);

  return hasToken;
};

export default useToken;
