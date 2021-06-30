import React from "react";
import List from "../components/List/List";
import Nav from "../components/Nav/Nav";
import { Home as StyledHome } from "./styles";

export const Home = ({ themeToggler }) => {
  return (
    <StyledHome>
      <Nav>
        <button onClick={themeToggler}>Change Theme</button>
      </Nav>
      <List />
    </StyledHome>
  );
};

export default Home;
