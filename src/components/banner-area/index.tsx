import { h, FC } from "preact";
import { useSelector } from "../../lib/preact-redux";
import { useState } from "preact/hooks";

export const BannerArea: FC = () => {
  const answered = useSelector((s) => s.answered);

  const [acqLength, setAcqLength] = useState(answered.size);
  const [newAnswered, setNewAnswered] = useState<number[][]>([]);

  setNewAnswered([
    ...newAnswered,
    [...answered].filter((_id, i) => acqLength < i),
  ]);
  setAcqLength(answered.size);

  return <div>{/* WIP */}</div>;
};
