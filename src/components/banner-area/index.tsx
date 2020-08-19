import { h, FC, JSX } from "preact";
import { useSelector } from "../../lib/preact-redux";
import { useState, useEffect, useReducer, Reducer } from "preact/hooks";
import { pokedex } from "../../pokedex";
import { Banner } from "../banner";
import { getPokeImgURL } from "../../utils/get-poke-img-url";
import styles from "./styles.scss";

const addBannerAction = (data: [number, JSX.Element][]) =>
  ({ type: "add", data } as const);
const removeBannerAction = (data: number) =>
  ({ type: "delete", data } as const);

type SetBannerAction = ReturnType<
  typeof addBannerAction | typeof removeBannerAction
>;
type BannerReducerType = Reducer<Map<number, JSX.Element>, SetBannerAction>;
const bannerReducer: BannerReducerType = (s, a) => {
  switch (a.type) {
    case "add":
      return new Map([...s, ...a.data]);

    case "delete":
      s.delete(a.data);
      return new Map(s);
  }
};

// Banner を作成
const createBanner = (
  id: number,
  label: string,
  img: string,
  animeEnd: (id: number) => void
) => <Banner key={id} id={id} animeEnd={animeEnd} label={label} img={img} />;

export const BannerArea: FC = () => {
  const answered = useSelector((s) => s.answered);

  const [banners, dispatch] = useReducer(bannerReducer, new Map());
  const [acqLength, setAcqLength] = useState(answered.size);

  // Banner 操作
  const addBanner = (data: [number, JSX.Element][]) =>
    dispatch(addBannerAction(data));
  const removeBanner = (id: number) => dispatch(removeBannerAction(id));

  // 回答があった場合、対応するバナーを作成して表示
  useEffect(() => {
    // 新たに回答された分のid
    const newAnswered = [...answered].filter((_id, i) => acqLength <= i);

    // 取得済みのindexを保存
    setAcqLength(answered.size);

    // バナー作成
    const banner = pokedex
      .filter((p) => newAnswered.includes(p.id))
      .map((p): [number, JSX.Element] => [
        p.id,
        createBanner(p.id, p.name, getPokeImgURL(p.id), removeBanner),
      ]);

    // 表示よろ
    addBanner(banner);
  }, [answered]);

  return <div className={styles.root}>{[...banners.values()]}</div>;
};
