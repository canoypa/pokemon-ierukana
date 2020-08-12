import { h, FC, JSX } from "preact";
import { IconButton } from "../icon-button";
import { IconMic } from "../icons";
import { pokeKeywordToId } from "../../pokedex";
import styles from "./styles.scss";
import { setAnswered } from "../../actions/answered";
import { useState } from "preact/hooks";
import { classNames } from "../../utils/class-names";

// Web Speech Api
const { webkitSpeechRecognition, SpeechRecognition } = window;
const ISpeechRecognition = webkitSpeechRecognition || SpeechRecognition;

export const AnswerArea: FC = () => {
  const [inputtingVoice, setInputtingVoice] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const answerInStr: JSX.GenericEventHandler<HTMLInputElement> = (event) => {
    const keyword = event.currentTarget.value;
    const id = pokeKeywordToId[keyword];

    if (id) setAnswered(id);
  };

  const speech = new ISpeechRecognition();
  speech.lang = "ja-JP"; // 言語
  speech.interimResults = true; // 暫定結果を取得可能にする
  speech.continuous = true; // 認識後も続行する

  speech.addEventListener("start", () => {
    console.log("start");

    setInputtingVoice(true);
  });

  speech.addEventListener("end", () => {
    console.log("end");

    // #とまらない音声認識
    setInputtingVoice(false);
    setInputValue("");
  });

  speech.addEventListener("result", (event: any) => {
    const result = event.results[event.resultIndex];
    const alt = result[0];
    const text = alt.transcript;

    setInputValue(text);

    if (result.isFinal) speech.stop();

    console.log("==================================================");
    console.log("Rrsult Event");
    console.log("Event: ", event);
    console.log("Text: ", text);
    console.log("isFinal: ", result.isFinal);
    console.log("==================================================");
  });

  const startVoiceInput = () => {
    speech.start();
  };

  const stopVoiceInput = () => {
    console.log("stop voice input");

    speech.abort();
    speech.stop();
  };

  return (
    <div class={styles.root}>
      <input
        class={styles.input}
        type="text"
        placeholder={inputtingVoice ? "認識中..." : "解答欄"}
        aria-label="解答欄"
        onChange={answerInStr}
        value={inputValue}
        disabled={inputtingVoice}
      />

      {ISpeechRecognition && (
        <div
          className={classNames(styles.speechButtonWrapper, {
            [styles.inputtingVoice]: inputtingVoice,
          })}
        >
          <div className={styles.speechButtonRipple}></div>
          <IconButton
            className={styles.absolute}
            icon={IconMic}
            aria-label="音声入力"
            onClick={inputtingVoice ? stopVoiceInput : startVoiceInput}
          />
        </div>
      )}
    </div>
  );
};
