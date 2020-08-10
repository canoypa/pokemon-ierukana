import { h, FC } from "preact";
import { GameMode } from "../../store/reducers/mode";

export const SettingsDialog: FC = () => {
  const changeGameMode = () => {
    // Todo
  };

  const resetAnswered = () => {
    // Todo
  };

  return (
    <div>
      <div>
        <h2>設定</h2>
      </div>
      <div>
        <section>
          <label htmlFor="">
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
          <button onClick={resetAnswered}>回答履歴をリセット</button>
        </section>
      </div>
    </div>
  );
};
