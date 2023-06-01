import React from "react";
import "./Search.css";
import { useContext } from "react";
import Context from "../../contexts/Context";

const Search = () => {
  const { setSearch } = useContext(Context);
  const SearchHandler = (e) => {
    // console.log(e.target.value);
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    console.log();
  };
  return (
    <div className="searchbox">
      <input type="text" placeholder="Search" onChange={SearchHandler} />
    </div>
  );
};

export default Search;
