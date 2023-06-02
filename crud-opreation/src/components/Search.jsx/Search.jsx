import React, { useState } from "react";
import "./Search.css";
import { useContext } from "react";
import Context from "../../contexts/Context";
const Search = ({ onSearch }) => {
  // const { setSearch } = useContext(Context);
  const SearchHandler = (e) => {
    // console.log(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <div className="searchbox">
      <input type="text" placeholder="Search" onChange={SearchHandler} />
    </div>
  );
};

export default Search;
