import { h, Fragment, FC } from "preact";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Footer } from "../../components/footer";

export const App: FC = () => (
  <Fragment>
    <Header />
    <Main />
    <Footer />

    <Banner />
  </Fragment>
);
