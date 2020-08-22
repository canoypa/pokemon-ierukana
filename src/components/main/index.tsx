import { h, FC } from "preact";
import { pokedex } from "../../pokedex";
import { Poke } from "../poke";
import styles from "./styles.scss";
import { Windowing } from "../windowing";
import { useEffect, useState } from "preact/hooks";

export const Main: FC = () => {
  const rowHeight = 96;
  const rowWidth = 256;
  const [colCount, setColCount] = useState(~~(window.innerWidth / rowWidth));
  const [rowCount, setRowCount] = useState(
    Math.ceil(pokedex.length / colCount)
  );

  const renderPoke = (rowIndex: number) => {
    const fromIndex = rowIndex * colCount;
    const toIndex = fromIndex + colCount + 1;

    return (
      <div className={styles.pokerow}>
        {pokedex
          .filter(({ id }) => fromIndex < id && id < toIndex)
          .map(({ id, name }) => (
            <Poke id={id} name={name} />
          ))}
      </div>
    );
  };

  const onResize = () => {
    const newColCount = ~~(window.innerWidth / rowWidth);
    const newRowCount = Math.ceil(pokedex.length / newColCount);

    setColCount(newColCount);
    setRowCount(newRowCount);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className={styles.root}>
      <Windowing
        className={styles.pokes}
        rowCount={rowCount}
        rowHeight={rowHeight}
        render={renderPoke}
      />
    </div>
  );
};
