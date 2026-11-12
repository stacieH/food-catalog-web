import { useDebugValue, useState } from 'react';

type SetUserProps = {
  [key: string]: string | null;
};

function useUserLogin() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const setUser = (props: SetUserProps) => {
    const name = Object.keys(props);

    if (name && name[0] === 'username') {
      setUsername(props[name[0]]);
    } else {
      setPassword(props[name[0]]);
    }
  };

  useDebugValue({ username }, (i) => `here's the values ${JSON.stringify(i)}`);

  return [{ username, password }, setUser];
}

export default useUserLogin;
