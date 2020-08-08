import { h, Fragment, FC } from "preact";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Footer } from "../../components/footer";
import { BannerArea } from "../../components/banner-area";

export const App: FC = () => (
  <Fragment>
    <Header />
    <Main />
    <Footer />

    <BannerArea />
  </Fragment>
);
