import { FC } from "preact";
import { IconButton } from "../icon-button";
import { IconSettings } from "../icons";

export const Header: FC = () => (
  <header>
    <section className="start">
      <span id="title">Pokémon Ierukana</span>
    </section>
    <section className="end">
      <IconButton icon={IconSettings} area-label="設定" />
    </section>
  </header>
);
