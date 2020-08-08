import { h, Fragment, FC } from "preact";
import { Header } from "../../components/header";

export const App: FC = () => (
  <Fragment>
    <Header />
    <Main />
    <Footer />

    <Banner />
  </Fragment>
);
