import { h, FC } from "preact";
import { useSelector } from "../../lib/preact-redux";
import styles from "./styles.scss";
import { useRef, useState, useEffect } from "preact/hooks";

const ImgBone: FC = () => <div class={styles.imgbone}>？</div>;

type Props = {
  id: number;
  name: string;
};
export const Poke: FC<Props> = ({ id, name }) => {
  const elm = useRef<HTMLDivElement>();

  const isAnswered = useSelector((store) => store.answered.has(id));
  const [isIntersected, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.unobserve(elm.current);
      }
    });
    observer.observe(elm.current);

    return () => observer.unobserve(elm.current);
  }, []);

  const displayName = isAnswered ? name : "？？？？";
  const displayImg =
    isIntersected && isAnswered ? (
      <img
        class={styles.img}
        src={`./assets/images/pokemon/${id}.png`}
        alt={name}
      />
    ) : (
      <ImgBone />
    );

  return (
    <div class={styles.root} ref={elm}>
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
