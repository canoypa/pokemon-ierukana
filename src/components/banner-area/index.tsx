import { h, FC, JSX } from "preact";
import { useSelector } from "../../lib/preact-redux";
import { useState, useEffect, useReducer, Reducer } from "preact/hooks";
import { pokedex } from "../../pokedex";
import { Banner } from "../banner";
import { getPokeImgURL } from "../../utils/get-poke-img-url";
import styles from "./styles.scss";

const deleteBanner = (id: number) =>
  ({
    type: "delete",
    data: id,
  } as const);

const addBannerAction = (data: [number, JSX.Element][]) =>
  ({
    type: "add",
    data,
  } as const);

type SetBannersAction =
  | ReturnType<typeof addBannerAction>
  | ReturnType<typeof deleteBanner>;
const bannerReducer: Reducer<Map<number, JSX.Element>, SetBannersAction> = (
  s,
  a
) => {
  switch (a.type) {
    case "add":
      return new Map([...s, ...a.data]);

    case "delete":
      s.delete(a.data);
      return new Map(s);
  }
};

export const BannerArea: FC = () => {
  const answered = useSelector((s) => s.answered);

  const [banners, dispatch] = useReducer(bannerReducer, new Map());
  const [acqLength, setAcqLength] = useState(answered.size);

  // Banner から animationEnd を受け取り、削除
  const addBanner = (data: [number, h.JSX.Element][]) =>
    dispatch(addBannerAction(data));
  const removeBanner = (id: number) => dispatch(deleteBanner(id));

  const createBanner = (id: number, label: string, img: string) => (
    <Banner key={id} id={id} animeEnd={removeBanner} label={label} img={img} />
  );

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
        createBanner(p.id, p.name, getPokeImgURL(p.id)),
      ]);

    // 表示よろ
    addBanner(banner);
  }, [answered]);

  return <div className={styles.root}>{[...banners.values()]}</div>;
};
