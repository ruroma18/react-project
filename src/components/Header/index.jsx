import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import styles from "./Header.module.scss";
import cx from "classnames";
import CONSTANTS from "../../constants";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  function changeTheme({ target: { value } }) {
    setTheme(value);
  }

  const headerStyles = cx(styles.headerContainer, {
    [styles.lightTheme]: theme === CONSTANTS.THEME.LIGHT,
    [styles.darkTheme]: theme === CONSTANTS.THEME.DARK
  });

  return (
    <div>
      <header className={headerStyles}>
        <h1>My site</h1>
        <div className={styles.btnContainer}>
          <button className={styles.themeBtn} value={CONSTANTS.THEME.DARK} onClick={changeTheme}>Dark</button>
          <button className={styles.themeBtn} value={CONSTANTS.THEME.LIGHT} onClick={changeTheme}>Light</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
