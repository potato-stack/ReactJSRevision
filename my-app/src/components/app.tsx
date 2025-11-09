import { Header } from "./mainpage.header";
import { MainPage } from "./mainpage.appmain";
import type { JSX } from "react";
export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
};
