import { h, FC, Fragment, JSX } from "preact";
import { GameMode } from "../../store/reducers/mode";
import { useSelector } from "../../lib/preact-redux";
import { setGameMode } from "../../actions/mode";
import { resetAnswered } from "../../actions/answered";
import { setIsSettingsOpen } from "../../actions/is-settings-open";
import styles from "./styles.scss";

export const SettingsDialog: FC = () => {
  const isOpen = useSelector((store) => store.isSettingsOpen);
  const gameMode = useSelector((store) => store.mode);

  const changeGameMode: JSX.GenericEventHandler<HTMLSelectElement> = (
    event
  ) => {
    // ゲームモードを変更
    const value = event.currentTarget.value;

    // 変更できるのでチェック
    if (value === GameMode.Normal || value === GameMode.Dareda) {
      setGameMode(value);
    }
  };

  const resetAnsweredHandler = () => {
    resetAnswered();
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <Fragment>
      {isOpen && (
        <div className={styles.wrapper}>
          <div className={styles.root}>
            <div className={styles.body}>
              <section className={styles.section}>
                <label>
                  <div className={styles.label}>ゲームモード</div>
                  <select value={gameMode} onChange={changeGameMode}>
                    <option value={GameMode.Normal}>
                      通常モード (シルエットなし)
                    </option>
                    <option value={GameMode.Dareda}>
                      Dareda モード (シルエットを表示)
                    </option>
                  </select>
                </label>
              </section>

              <section className={styles.section}>
                <label>
                  <div className={styles.label}>回答履歴をリセット</div>
                  <button onClick={resetAnsweredHandler}>リセットする</button>
                </label>
              </section>
            </div>
          </div>
          <div className={styles.scrim} onClick={closeSettings} />
        </div>
      )}
    </Fragment>
  );
};
