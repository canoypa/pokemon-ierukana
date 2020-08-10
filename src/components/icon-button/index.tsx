import { h, FC, JSX } from "preact";
import styles from "./styles.scss";
import { classNames } from "../../utils/class-names";

type Props = {
  icon: FC;
} & Omit<JSX.HTMLAttributes<HTMLButtonElement>, "icon">;
export const IconButton: FC<Props> = ({ icon: Icon, className, ...attr }) => (
  <button className={classNames(styles.iconButton, className)} {...attr}>
    <Icon />
  </button>
);
