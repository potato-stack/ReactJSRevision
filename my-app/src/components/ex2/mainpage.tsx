import type { JSX } from "react";
import { Header } from "./mainpage.header";
import { Content } from "./mainpage.content";

export const MainPage = (): JSX.Element => {
	return (
		<>
		 <Header></Header>
		 <Content></Content>
		</>
	)
}