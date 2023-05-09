import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./../../assets/Images/logo.jpg";
import Context from "../../contexts/Context";

function Header() {
  // const [searchItem, setSearchItem] = useState("");
  const { setSearch } = useContext(Context);
  const SearchHandler = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };
  // searchvalue = search;
  // console.log(searchvalue);
  return (
    <header className="header">
      <div>
        <figure className="image-wrapper">
          <img src={logo} />
        </figure>
      </div>
      <div className="Searchbox">
        <input
          type="text"
          placeholder="Search"
          // value={search}
          onChange={SearchHandler}
        />
      </div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <Link to={"/home"}>
            <li className="nav-item">
              {/* <Home size={22} /> */}
              <span className="nav-link"> Home</span>
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="nav-item">
              {/* <Home size={22} /> */}
              <span className="nav-link"> About</span>
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className="nav-item">
              {/* <Home size={22} /> */}
              <span className="nav-link"> Contact-us</span>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
