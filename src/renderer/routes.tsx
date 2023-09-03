import { MemoryRouter, Route, Routes, Navigate } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import { useContext } from 'react';
import { AuthContext } from './context/Auth';
import AuthProvider from './providers/Auth';

export default function appRoutes() {
  return (
    <AuthProvider>
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </MemoryRouter>
    </AuthProvider>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let { authed } = useContext(AuthContext);

  if (authed) return children;

  return <Navigate to="/login" replace />;
}
