import { createContext } from 'react';

export type UserContextType = {
  loginUser: { username: string | null; password: string | null };
  setLoginUser: (user: {
    username: string | null;
    password: string | null;
  }) => void;
};

export const UserContext = createContext<UserContextType>({
  loginUser: { username: null, password: null },
  setLoginUser: (user: {
    username: string | null;
    password: string | null;
  }) => {
    // do something with the user object, e.g., update state or perform an action
    console.warn(user, 'setLoginUser function is not implemented yet');
  },
});
