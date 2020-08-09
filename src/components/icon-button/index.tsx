import { h, FC } from "preact";
import styles from "./styles.scss";

type Props = {
  icon: FC;
};
export const IconButton: FC<Props> = ({ icon: Icon }) => (
  <button className={styles.iconButton}>
    <Icon />
  </button>
);
