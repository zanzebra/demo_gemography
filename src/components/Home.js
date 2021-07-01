import React, { useState } from "react";
import { useQuery } from "react-query";
import List from "../components/List/List";
import Nav from "../components/Nav/Nav";
import { Home as StyledHome } from "./styles";
import axios from "axios";

var today = new Date();
var date = new Date().setDate(today.getDate() - 30);
console.log(date, today);
//date.toISOString().substring(0, 10);
console.log(date);

export const Home = ({ theme, themeToggler }) => {
  const [page, setPage] = useState(1);
  function useRepos() {
    return useQuery(
      ["repos", page],
      async () => {
        const { data } = await axios.get(
          `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`
        );
        return data;
      },
      { keepPreviousData: true }
    );
  }
  const { isLoading, data, isFetching, isPreviousData } = useRepos();
  console.log(data);
  return (
    <StyledHome>
      <Nav
        setPage={setPage}
        page={page}
        isFetching={isFetching}
        themeToggler={themeToggler}
      >
        <button onClick={themeToggler}>Change Theme</button>
      </Nav>
      <List
        isLoading={isLoading}
        data={data}
        isFetching={isFetching}
        isPreviousData={isPreviousData}
      />
    </StyledHome>
  );
};

export default Home;
