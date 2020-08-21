import { h, FC } from "preact";
import { IconButton } from "../icon-button";
import { IconSettings } from "../icons";
import { setIsSettingsOpen } from "../../actions/is-settings-open";
import styles from "./styles.scss";

export const Header: FC = () => {
  const openSettings = () => setIsSettingsOpen(true);

  return (
    <header class={styles.root}>
      <section class={styles.section}>
        <span class={styles.title}>Pokémon Ierukana</span>
      </section>
      <section class={styles.section}>
        <IconButton
          icon={IconSettings}
          aria-label="設定"
          onClick={openSettings}
        />
      </section>
    </header>
  );
};
