import { h, FC } from "preact";
import { AnswerArea } from "../answer-area";

export const Footer: FC = () => (
  <div>
    <div>
      {/* <time id="time">nn</time> */}
      <span>Loading...</span>
    </div>
    <AnswerArea />
  </div>
);
