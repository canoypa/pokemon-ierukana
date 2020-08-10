import { h, FC } from "preact";
import { IconButton } from "../icon-button";
import { IconMic } from "../icons";

export const AnswerArea: FC = () => {
  const answerInStr = () => {
    // Todo
  };

  const startVoiceInput = () => {
    // Todo
  };

  return (
    <div>
      <input
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
