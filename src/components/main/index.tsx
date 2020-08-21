import { h, FC } from "preact";
import { pokedex } from "../../pokedex";
import { Poke } from "../poke";
import styles from "./styles.scss";
import { Windowing } from "../windowing";

export const Main: FC = () => {
  const rowHeight = 96;
  const rowWidth = 256;
  const colCount = ~~(window.innerWidth / rowWidth);
  const rowCount = Math.ceil(pokedex.length / colCount);

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
