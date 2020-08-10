import { h, FC, Fragment } from "preact";
import { GameMode } from "../../store/reducers/mode";
import { useSelector } from "../../lib/preact-redux";

export const SettingsDialog: FC = () => {
  const isOpen = useSelector((store) => store.isSettingsOpen);
  console.log(isOpen);

  const changeGameMode = () => {
    // Todo
  };

  const resetAnswered = () => {
    // Todo
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
                <button onClick={resetAnswered}>リセットする</button>
              </label>
            </section>
          </div>
        </div>
      )}
    </Fragment>
  );
};
