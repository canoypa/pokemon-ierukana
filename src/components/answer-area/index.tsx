import { FC } from "preact";
import { IconButton } from "../icon-button";
import { IconMic } from "../icons";

export const AnswerArea: FC = () => (
  <div>
    <input type="text" placeholder="解答欄" aria-label="解答欄" />
    <IconButton icon={IconMic} aria-label="音声入力" />
  </div>
);
