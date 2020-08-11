import { h, FC, JSX } from "preact";
import { IconButton } from "../icon-button";
import { IconMic } from "../icons";
import { pokeKeywordToId } from "../../pokedex";
import styles from "./styles.scss";

export const AnswerArea: FC = () => {
  const answerInStr: JSX.GenericEventHandler<HTMLInputElement> = (event) => {
    // Todo

    const keyword = event.currentTarget.value;

    console.log(keyword);
    console.log(pokeKeywordToId[keyword]);
  };

  const startVoiceInput = () => {
    // Todo
  };

  return (
    <div class={styles.root}>
      <input
        class={styles.input}
        type="text"
        placeholder="解答欄"
        aria-label="解答欄"
        onChange={answerInStr}
      />
      <IconButton
        icon={IconMic}
        aria-label="音声入力"
        onClick={startVoiceInput}
      />
    </div>
  );
};
