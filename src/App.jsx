import "./App.css";
import "./reset.css";
import { useState } from "react";
import { ThemeContext } from "./contexts";
import CONSTANTS from "./constants";
import Header from "./components/Header";

const App = () => {
  const [theme, setTheme] = useState(CONSTANTS.THEME.LIGHT);

  return (
    <div>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Header />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
