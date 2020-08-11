import { h, FC } from "preact";
import styles from "./styles.scss";

type Props = {
  id: number;
  name: string;
};
export const Poke: FC<Props> = ({ id }) => (
  <div class={styles.root}>
    <div class={styles.imgarea}>
      <div class={styles.imgbone}>？</div>
    </div>
    <div class={styles.primary}>
      <div>
        No: <span>{id}</span>
      </div>
      <div class={styles.name}>？？？？</div>
    </div>
  </div>
);
