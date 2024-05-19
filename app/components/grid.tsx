import { ReactElement } from "react";
import styles from "./grid.module.scss";

interface Props {
  children: ReactElement | ReactElement[];
}

export function Row({ children }: Props): ReactElement {
  return <div className={styles.row}>{children}</div>;
}

export function Box({ children }: Props): ReactElement {
  return <div className={styles.box}>{children}</div>;
}
