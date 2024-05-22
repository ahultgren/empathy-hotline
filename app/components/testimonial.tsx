import { ReactElement } from "react";
import styles from "./testimonial.module.scss";

export default function Button({
  children,
  by,
}: {
  children: string;
  by: string;
}): ReactElement {
  return (
    <div className={styles.testimonial}>
      <p>
        “{children}”
        <br />
        <br />— {by}
      </p>
    </div>
  );
}
