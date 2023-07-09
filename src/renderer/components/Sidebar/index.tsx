import Logo from '../Logo';

import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidenav}>
      <Logo />
      <a href="#">Meu dia</a>
      <a href="#">Importante</a>
      <a href="#">Planejado</a>
      <a href="#">Trabalho</a>
    </div>
  );
}
