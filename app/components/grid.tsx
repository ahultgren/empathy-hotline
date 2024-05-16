import styles from "./grid.module.scss";

export function Row({ children }) {
  return <div className={styles.row}>{children}</div>;
}

export function Box({ children }) {
  return <div className={styles.box}>{children}</div>;
}
