import { h, FC } from "preact";
import { useSelector } from "../../lib/preact-redux";
import { AnswerArea } from "../answer-area";
import { pokedex } from "../../pokedex";
import styles from "./styles.scss";

const pokeLen = pokedex.length;

export const Footer: FC = () => {
  const answeredLen = useSelector((store) => store.answered.size);

  return (
    <div class={styles.root}>
      <div class={styles.data}>
        <span>{answeredLen}</span>
        <span> / </span>
        <span>{pokeLen}</span>
      </div>
      <AnswerArea />
    </div>
  );
};
