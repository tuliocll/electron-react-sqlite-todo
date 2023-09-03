import { useContext } from 'react';
import Logo from '../Logo';

import styles from './Sidebar.module.css';
import { AuthContext } from 'renderer/context/Auth';

export default function Sidebar() {
  const { logout } = useContext(AuthContext);

  return (
    <div className={styles.sidenav}>
      <Logo />
      <a href="#">Meu dia</a>
      <a href="#">Importante</a>
      <a href="#">Planejado</a>
      <a href="#">Trabalho</a>

      <a href="#" onClick={logout}>
        Logout
      </a>
    </div>
  );
}
