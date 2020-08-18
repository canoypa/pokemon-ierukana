import { h, FC } from "preact";
import styles from "./styles.scss";

type Props = {
  label: string;
  img: string;
};
export const Banner: FC<Props> = ({ label, img }) => {
  const animationEnd = () => {
    // BannerArea に通知してこれを描画リストから削除
  };

  return (
    <div className={styles.root} onAnimationEnd={animationEnd}>
      <img className={styles.img} src={img} />
      <div className={styles.label}>{label}</div>
    </div>
  );
};
