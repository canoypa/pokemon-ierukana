import { h, FC, JSX } from "preact";
import styles from "./styles.scss";

type Props = {
  icon: FC;
} & JSX.HTMLAttributes<HTMLButtonElement>;
export const IconButton: FC<Props> = ({ icon: Icon, ...attr }) => (
  <button className={styles.iconButton} {...attr}>
    <Icon />
  </button>
);
