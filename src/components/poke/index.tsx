import { h, FC } from "preact";
import { useSelector } from "../../lib/preact-redux";
import styles from "./styles.scss";
import { useRef } from "preact/hooks";
import { classNames } from "../../utils/class-names";
import { getPokeImgURL } from "../../utils/get-poke-img-url";

const ImgBone: FC = () => <div class={styles.imgbone}>？</div>;

type Props = {
  id: number;
  name: string;
};
export const Poke: FC<Props> = ({ id, name }) => {
  const elm = useRef<HTMLDivElement>();

  const isAnswered = useSelector((store) => store.answered.has(id));
  const isDaredaMode = useSelector((store) => store.mode === "Dareda");

  const displayName = isAnswered ? name : "？？？？";
  const displayImg =
    isDaredaMode || isAnswered ? (
      <img
        class={classNames(styles.img, {
          [styles.dareda]: !isAnswered && isDaredaMode,
        })}
        src={getPokeImgURL(id)}
        alt={name}
      />
    ) : (
      <ImgBone />
    );

  return (
    <div class={styles.root} ref={elm}>
      <div class={styles.imgarea}>{displayImg}</div>
      <div class={styles.primary}>
        <div className={styles.no}>
          <span>No: </span>
          <span>{id}</span>
        </div>
        <div class={styles.name}>{displayName}</div>
      </div>
    </div>
  );
};
