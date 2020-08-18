import { h, FC, JSX } from "preact";
import { useSelector } from "../../lib/preact-redux";
import { useState, useEffect } from "preact/hooks";
import { pokedex } from "../../pokedex";
import { Banner } from "../banner";
import { getPokeImgURL } from "../../utils/get-poke-img-url";

export const BannerArea: FC = () => {
  const answered = useSelector((s) => s.answered);

  const [banners, setBanners] = useState<Map<number, JSX.Element>>(new Map());
  const [acqLength, setAcqLength] = useState(answered.size);

  const createBanner = (label: string, img: string) => (
    <Banner label={label} img={img} />
  );

  const removeBanner = () => {
    // Banner から animationEnd を受け取り、削除
  };

  // 回答があった場合、対応するバナーを作成して表示
  useEffect(() => {
    // 新たに回答された分のid
    const newAnswered = [...answered].filter((_id, i) => acqLength < i);
    // 取得済みのindexを保存
    setAcqLength(answered.size);

    // バナー作成
    const banner = pokedex
      .filter((p) => newAnswered.includes(p.id))
      .map((p): [number, JSX.Element] => [
        p.id,
        createBanner(getPokeImgURL(p.id), p.name),
      ]);

    // 表示よろ
    setBanners(new Map([...banners, ...banner]));
  }, [answered]);

  return <div>{...[...banners.values()]}</div>;
};
