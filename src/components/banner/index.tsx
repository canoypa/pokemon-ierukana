import { h, FC } from "preact";
import styles from "./styles.scss";

type Props = {
  id: number;
  animeEnd: (id: number) => void;
  label: string;
  img: string;
};
export const Banner: FC<Props> = ({ id, animeEnd, label, img }) => {
  // BannerArea に通知してこれを描画リストから削除
  const animationEnd = () => animeEnd(id);

  return (
    <div className={styles.root} onAnimationEnd={animationEnd}>
      <img className={styles.img} src={img} />
      <div className={styles.label}>{label}</div>
    </div>
  );
};
