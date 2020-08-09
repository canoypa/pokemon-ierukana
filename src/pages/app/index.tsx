import { h, FC } from "preact";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Footer } from "../../components/footer";
import { BannerArea } from "../../components/banner-area";
import { Provider } from "../../lib/preact-redux";
import { store } from "../../store";

export const App: FC = () => (
  <Provider store={store}>
    <Header />
    <Main />
    <Footer />

    <BannerArea />
  </Provider>
);
