import { type JSX } from "react";

export const Footer = (): JSX.Element => {
  return (
    <>
      <footer>
        <small>20214 Dummy web developement. All rights reserved.</small>
      </footer>
    </>
  );
};

export const MainPage = (): JSX.Element => {
  return (
    <>
      <main>
        <h1 className="main-header">Fun facts about React</h1>
        <ol className="main-list">
          <li className="main-list-items">Was first released in 2013</li>
          <li className="main-list-items">
            Was originally created by Jordan Walke
          </li>
          <li className="main-list-items">
            {" "}
            Has well over 200k stars on Github
          </li>
          <li className="main-list-items">Is maintained by Meta</li>
          <li className="main-list-items">
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ol>
      </main>
    </>
  );
};
