import React, { useState } from "react";
import { Home } from "./components/Home";
import { ThemeProvider } from "styled-components";
import "./App.css";
import "antd/dist/antd.css";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Home theme={theme} themeToggler={themeToggler} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
