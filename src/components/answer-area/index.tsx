import { h, FC, JSX } from "preact";
import { IconButton } from "../icon-button";
import { IconMic } from "../icons";
import { pokeKeywordToId } from "../../pokedex";
import styles from "./styles.scss";
import { setAnswered } from "../../actions/answered";
import { useState, useMemo } from "preact/hooks";
import { classNames } from "../../utils/class-names";

const answerInVoice = (text: string) => {
  // キーワードを全て取得
  const matchPokeKeywords = Object.keys(pokeKeywordToId).filter((k) =>
    text.includes(k)
  ); // 入力された文字列に部分一致するキーワードを摘出

  // なければ終了
  if (matchPokeKeywords.length === 0) return;

  // 名前の重複問題を解決 (ギギギアル だけで ギアル, ギギアル, ギギギアル に一致する)
  const fullMatchPokeKeywords = matchPokeKeywords
    .filter((k, _i, arr) => {
      // 部分重複するキーワードを取得
      const partialMatch = arr.filter((v) => v !== k && v.includes(k));

      // なければ保持
      if (partialMatch.length === 0) return true;

      let _text = text;
      // 文字の長い順にソートし、順に入力された文字列から削除
      partialMatch
        .sort((a, b) => (a.length < b.length ? 1 : -1))
        .forEach((v) => (_text = _text.replace(v, "")));

      // まだ一致する場合保持
      return _text.includes(k) ? true : false;
    })
    .map((k) => pokeKeywordToId[k]);

  // id リストを dispatch
  setAnswered(...fullMatchPokeKeywords);
};

// Web Speech Api
const { webkitSpeechRecognition, SpeechRecognition } = window;
const ISpeechRecognition = webkitSpeechRecognition || SpeechRecognition;

export const AnswerArea: FC = () => {
  const [isInputtingVoice, setIsInputtingVoice] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onInput: JSX.GenericEventHandler<HTMLInputElement> = (event) =>
    setInputValue(event.currentTarget.value);

  const answerInStr: JSX.GenericEventHandler<HTMLInputElement> = (event) => {
    const keyword = event.currentTarget.value;
    const id = pokeKeywordToId[keyword];

    if (id) {
      setAnswered(id);
      setInputValue("");
    }
  };

  const speech = useMemo(() => {
    const ISpeech = new ISpeechRecognition();
    ISpeech.lang = "ja-JP"; // 言語
    ISpeech.interimResults = true; // 暫定結果を取得可能にする
    ISpeech.continuous = true; // 認識後も続行する

    ISpeech.addEventListener("start", () => {
      console.log("start");

      setIsInputtingVoice(true);
    });

    ISpeech.addEventListener("end", () => {
      console.log("end");

      setIsInputtingVoice(false);
      setInputValue("");
    });

    ISpeech.addEventListener("result", (event: any) => {
      const result = event.results[event.resultIndex];
      const alt = result[0];
      const text = alt.transcript;

      setInputValue(text);

      if (result.isFinal) answerInVoice(text);

      console.log("==================================================");
      console.log("Rrsult Event");
      console.log("Event: ", event);
      console.log("Text: ", text);
      console.log("isFinal: ", result.isFinal);
      console.log("==================================================");
    });

    return ISpeech;
  }, []);

  const startVoiceInput = () => speech.start();
  const stopVoiceInput = () => speech.abort();

  return (
    <div class={styles.root}>
      <input
        class={styles.input}
        type="text"
        placeholder={isInputtingVoice ? "認識中..." : "解答欄"}
        aria-label="解答欄"
        onInput={onInput}
        onChange={answerInStr}
        value={inputValue}
        readOnly={isInputtingVoice}
      />

      {ISpeechRecognition && (
        <div
          className={classNames(styles.speechButtonWrapper, {
            [styles.inputtingVoice]: isInputtingVoice,
          })}
        >
          <div className={styles.speechButtonRipple}></div>
          <IconButton
            className={styles.absolute}
            icon={IconMic}
            aria-label="音声入力"
            onClick={isInputtingVoice ? stopVoiceInput : startVoiceInput}
          />
        </div>
      )}
    </div>
  );
};
