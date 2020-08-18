import { h, FC, JSX } from "preact";
import { useSelector } from "../../lib/preact-redux";
import { useState, useEffect } from "preact/hooks";
import { pokedex } from "../../pokedex";
import { Banner } from "../banner";
import { getPokeImgURL } from "../../utils/get-poke-img-url";

export const BannerArea: FC = () => {
  const answered = useSelector((s) => s.answered);

  const [banners, setBanners] = useState<JSX.Element[]>([]);
  const [acqLength, setAcqLength] = useState(answered.size);

  const createBanner = (label: string, img: string) => (
    <Banner label={label} img={img} />
  );

  useEffect(() => {
    const newAnswered = [...answered].filter((_id, i) => acqLength < i);
    setAcqLength(answered.size);

    const banner = pokedex
      .filter((p) => newAnswered.includes(p.id))
      .map((p) => createBanner(getPokeImgURL(p.id), p.name));

    setBanners([...banners, ...banner]);
  }, [acqLength]);

  return <div>{/* WIP */}</div>;
};
