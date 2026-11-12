import { createContext } from 'react';

export const UserContext = createContext({
  loginUser : null,
  // eslint-disable-next-line no-unused-vars
  setLoginUser: (user: any) => {}
});
