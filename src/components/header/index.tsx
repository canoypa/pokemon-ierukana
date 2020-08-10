import { h, FC } from "preact";
import { IconButton } from "../icon-button";
import { IconSettings } from "../icons";
import { setIsSettingsOpen } from "../../actions/is-settings-open";

export const Header: FC = () => {
  const openSettings = () => setIsSettingsOpen(true);

  return (
    <header>
      <section className="start">
        <span id="title">Pokémon Ierukana</span>
      </section>
      <section className="end">
        <IconButton
          icon={IconSettings}
          area-label="設定"
          onClick={openSettings}
        />
      </section>
    </header>
  );
};
