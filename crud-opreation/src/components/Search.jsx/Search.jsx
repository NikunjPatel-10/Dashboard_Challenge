import React from "react";
import "./Search.css";
import { useContext } from "react";
import Context from "../../contexts/Context";

const Search = () => {
  const { setSearch } = useContext(Context);
  const SearchHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="searchbox">
      <input type="text" placeholder="Search" onChange={SearchHandler} />
    </div>
  );
};

export default Search;
