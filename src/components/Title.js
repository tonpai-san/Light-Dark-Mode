import { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../App";

const Title = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleSwitch = (checked) => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className={theme === "dark" ? "dark" : "light"}>
      <div>
        <span> Mode [{theme}] </span>
      </div>
      <div>
        <Switch
          onChange={toggleSwitch}
          checked={theme === "dark"}
          uncheckedIcon
          checkedIcon
          onColor={"#ffa500"}
        />
      </div>
    </header>
  );
};

export default Title;
