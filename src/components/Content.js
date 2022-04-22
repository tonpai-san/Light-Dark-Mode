import light from "../image/light.svg";
import dark from "../image/dark.svg";
import { ThemeContext } from "../App";
import { useContext } from "react";

const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <div>
        <h1>Tonpai San </h1>
        <p>Dark Light Mode</p>
      </div>
      <img src={theme === "dark" ? dark : light} alt="logo" />
    </main>
  );
};

export default Content;
