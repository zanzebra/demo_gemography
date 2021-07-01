import React from "react";
import Loading from "../Loading/Loading";
import Switch from "../Switch/Switch";
import { Nav as StyledNav } from "../styles";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Nav = ({ page, setPage, isFetching, themeToggler }) => {
  return (
    <StyledNav>
      <div className="navigation">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          <AiOutlineArrowLeft />
        </button>
        <span className="tag"> {page + 1}</span>
        <button
          onClick={() => {
            setPage((old) => Math.min(10, old + 1));
          }}
          disabled={page >= 10}
        >
          <AiOutlineArrowRight />
        </button>
        <div className="loading-container">
          {isFetching ? <Loading /> : null}
        </div>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Search" />
        <Switch themeToggler={themeToggler} />
      </div>
    </StyledNav>
  );
};

export default Nav;
