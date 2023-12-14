import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const useToken = (cookieName = 'token') => {
  const [hasToken, setHasToken] = useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get(cookieName);
    setHasToken(!token);
  }, [cookieName]);

  return hasToken;
};

export default useToken;
