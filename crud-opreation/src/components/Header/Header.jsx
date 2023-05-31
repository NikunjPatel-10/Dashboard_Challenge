import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "./../../assets/Images/logo.jpg";
import Context from "../../contexts/Context";

function Header() {
  // const [searchItem, setSearchItem] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("../login");
  };

  return (
    <header className="header">
      <div>
        <figure className="image-wrapper">
          <img src={logo} />
        </figure>
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
              <span className="nav-link">Contact-us</span>
            </li>
          </Link>
          <li className="nav-item">
            {/* <Home size={22} /> */}
            <button className="logout-btn-wrapper" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
