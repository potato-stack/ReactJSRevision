import { type JSX } from "react";

export const Header = (): JSX.Element => {
  return (
	<>
	  <header className="index-header">
		<img src="src/assets/react.svg" alt="React Icon" />
		<span id="index-header-text">ReactsFacts</span>
	  </header>
	</>
  );
};
