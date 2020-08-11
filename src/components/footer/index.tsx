import { h, FC } from "preact";
import { AnswerArea } from "../answer-area";
import styles from "./styles.scss";

export const Footer: FC = () => (
  <div class={styles.root}>
    <div class={styles.data}>
      {/* <time id="time">nn</time> */}
      <span>Loading...</span>
    </div>
    <AnswerArea />
  </div>
);
