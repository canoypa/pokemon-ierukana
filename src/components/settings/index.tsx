import { h, FC, Fragment, JSX } from "preact";
import { GameMode } from "../../store/reducers/mode";
import { useSelector } from "../../lib/preact-redux";
import { setGameMode } from "../../actions/mode";
import { resetAnswered } from "../../actions/answered";

export const SettingsDialog: FC = () => {
  const isOpen = useSelector((store) => store.isSettingsOpen);
  console.log(isOpen);

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

  return (
    <Fragment>
      {isOpen && (
        <div>
          <div>
            <h2>設定</h2>
          </div>
          <div>
            <section>
              <label>
                <div>ゲームモード</div>
                <select onChange={changeGameMode}>
                  <option value={GameMode.Normal}>
                    通常モード (シルエットなし)
                  </option>
                  <option value={GameMode.Dareda}>
                    Dareda モード (シルエットを表示)
                  </option>
                </select>
              </label>
            </section>

            <section>
              <label>
                <div>回答履歴をリセット</div>
                <button onClick={resetAnsweredHandler}>リセットする</button>
              </label>
            </section>
          </div>
        </div>
      )}
    </Fragment>
  );
};
