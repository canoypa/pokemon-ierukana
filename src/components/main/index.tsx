import { h, FC } from "preact";
import { pokedex } from "../../pokedex";
import { Poke } from "../poke";
import styles from "./styles.scss";

export const Main: FC = () => (
  <div class={styles.root}>
    {pokedex.map(({ id, name }) => (
      <Poke id={id} name={name} />
    ))}
  </div>
);
