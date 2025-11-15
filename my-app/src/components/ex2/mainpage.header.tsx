import type { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import "./mainpage.header.css";

export const Header = (): JSX.Element => {
  return (
    <>
      <header>
        <div className="Header-title">
          <FontAwesomeIcon
            icon={faEarthAmericas}
            className="fa-earthamericas-icon"
          />
          <span>my travel journal.</span>
        </div>
      </header>
    </>
  );
};
