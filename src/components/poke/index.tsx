import { h, FC } from "preact";
import { useSelector } from "../../lib/preact-redux";
import styles from "./styles.scss";

const ImgBone: FC = () => <div class={styles.imgbone}>？</div>;

type Props = {
  id: number;
  name: string;
};
export const Poke: FC<Props> = ({ id, name }) => {
  const isAnswered = useSelector((store) => store.answered.has(id));

  const displayName = isAnswered ? name : "？？？？";
  const displayImg = isAnswered ? (
    <img
      class={styles.img}
      src={`./assets/images/pokemon/${id}.png`}
      alt={name}
    />
  ) : (
    <ImgBone />
  );

  return (
    <div class={styles.root}>
      <div class={styles.imgarea}>{displayImg}</div>
      <div class={styles.primary}>
        <div>
          No: <span>{id}</span>
        </div>
        <div class={styles.name}>{displayName}</div>
      </div>
    </div>
  );
};
