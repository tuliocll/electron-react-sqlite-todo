import { useState } from 'react';
import { AuthContext } from '../context/Auth';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let [authed, setAuthed] = useState(false);

  let signin = async (user: Auth) => {
    const response = await window.electron.login(user);
    setAuthed(true);

    return response;
  };

  let register = async (user: Auth) => {
    await window.electron.register(user);
  };

  let logout = async () => setAuthed(false);

  let value = { authed, signin, register, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
