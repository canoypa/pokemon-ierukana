import { h, Fragment, FC } from "preact";
import { Header } from "../../components/header";
import { Main } from "../../components/main";

export const App: FC = () => (
  <Fragment>
    <Header />
    <Main />
    <Footer />

    <Banner />
  </Fragment>
);
