import { h, FC, JSX } from "preact";
import { useSelector } from "../../lib/preact-redux";
import { useState, useEffect } from "preact/hooks";
import { pokedex } from "../../pokedex";
import { Banner } from "../banner";
import { getPokeImgURL } from "../../utils/get-poke-img-url";
import styles from "./styles.scss";

export const BannerArea: FC = () => {
  const answered = useSelector((s) => s.answered);

  const [banners, setBanners] = useState<Map<number, JSX.Element>>(new Map());
  const [acqLength, setAcqLength] = useState(answered.size);

  const removeBanner = (id: number) => {
    // Banner から animationEnd を受け取り、削除
    banners.delete(id);
    setBanners(banners);
  };

  const createBanner = (id: number, label: string, img: string) => (
    <Banner id={id} animeEnd={removeBanner} label={label} img={img} />
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
    setBanners(new Map([...banners, ...banner]));
  }, [answered]);

  return <div className={styles.root}>{[...banners.values()]}</div>;
};
