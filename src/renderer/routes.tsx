import { MemoryRouter, Route, Routes } from 'react-router-dom';

import Home from './views/Home';

export default function appRoutes() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </MemoryRouter>
  );
}
