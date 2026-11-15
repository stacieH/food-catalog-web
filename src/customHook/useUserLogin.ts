import { useDebugValue, useState } from 'react';

type SetUserPropsOptional = {
  username?: string;
  password?: string;
};

type SetUserProps = {
  username: string;
  password: string;
};

export type UserLoginReturnType = [
  { username: string; password: string },
  (props?: SetUserPropsOptional) => void,
];

const useUserLogin = (): UserLoginReturnType => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const setUser = (props?: SetUserPropsOptional) => {
    if (!props) return;

    const name = Object.keys(props);

    if (name.length === 0) return;

    const nameKey = name[0] as keyof SetUserPropsOptional;

    if (name && name[0] === 'username') {
      setUsername(props[nameKey] || '');
    } else {
      setPassword(props[nameKey] || '');
    }
  };

  useDebugValue({ username }, (i) => `here's the values ${JSON.stringify(i)}`);

  return [{ username, password }, setUser];
};

export default useUserLogin;
