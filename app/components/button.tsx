import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "./button.module.scss";

export default function Button({
  children,
  href,
  icon,
  iconColor,
}: {
  children: string;
  href: string;
  icon: IconDefinition;
  iconColor?: string;
}): ReactElement {
  return (
    <a href={href} target="_blank" className={styles.button}>
      <span style={{ color: iconColor }}>
        <FontAwesomeIcon icon={icon} fixedWidth></FontAwesomeIcon>
      </span>{" "}
      <span className={styles.text}>{children}</span>
    </a>
  );
}
