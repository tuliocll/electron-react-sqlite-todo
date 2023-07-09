import styles from './FAB.module.css';

export default function FAB({ onClick }) {
  return (
    <button className={styles.container} onClick={onClick}>
      +
    </button>
  );
}
