import { ThemeContext } from "../../context/theme.context";

const ThemeToggle = () => {
  return (
    <ThemeContext.Consumer>
      {({ isDarkMode, handleThemeChange }) => {
        return (
          <button onClick={() => handleThemeChange(!isDarkMode)}>
            {isDarkMode ? "Dark Theme" : "Light Theme"}
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggle;
