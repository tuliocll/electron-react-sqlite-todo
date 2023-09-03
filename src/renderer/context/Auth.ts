import { createContext } from 'react';

export const AuthContext = createContext({
  authed: false,
  signin: async (user: Auth) => true || false,
  register: async (user: Auth) => true || false,
  logout: async () => {},
});
