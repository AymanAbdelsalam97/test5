import { ThemeContext } from "../../context/theme.context";

const ThemedButton = () => {
  return (
    <ThemeContext.Consumer>
      {({ isDarkMode }) => {
        return (
          <button className={`btn ${isDarkMode ? "btn--dark" : "btn--light"}`}>
            Styled Button
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemedButton;
