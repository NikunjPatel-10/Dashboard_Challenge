import React from "react";
import profile from "./../../../src/assets/Images/profile.jpg";
import {
  UnorderedListOutlined,
  AlignCenterOutlined,
  SlidersOutlined,
  DatabaseOutlined,
  FileOutlined,
  CalendarOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
// import { useContext } from "react";
// import ThemeContext from "../../context/ThemeContext";

const Header = () => {
  // const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className=" row header-size border-bottom border-gray gx-0 ">
      <div className=" col-4  d-flex  ps-4 ">
        <div className="d-flex justify-content-center align-items-center">
          <h4 className=" fst-normal  mb-0 ">Govalle Construction</h4>
        </div>
        <div className="d-flex justify-content-center align-items-center position-relative ms-4">
          <div>
            <figure className="header-img-wrapper mb-0">
              <img src={profile} />
            </figure>
          </div>
          <div className="header-icon-wrapper border-0">
            <span className="icon">GP</span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center col-4 gx-0 d-none  d-lg-block">
        <nav className="nav h-100 d-flex justify-content-center align-items-center">
          <NavLink className="nav-link " to={"/menu"}>
            <UnorderedListOutlined />
          </NavLink>
          <NavLink className="nav-link " to={"/align-data"}>
            <AlignCenterOutlined />
          </NavLink>
          <NavLink className="nav-link" to={"/sliders"}>
            <SlidersOutlined />
          </NavLink>
          <NavLink className="nav-link" to={"/database"}>
            <DatabaseOutlined />
          </NavLink>
          <NavLink className="nav-link " to={"/graph-statics"}>
            <LineChartOutlined />
          </NavLink>

          <NavLink className="nav-link" to={"/calender"}>
            <CalendarOutlined />
          </NavLink>
          <NavLink className="nav-link" to={"/file"}>
            <FileOutlined />
          </NavLink>
        </nav>
      </div>
      <div className="col-4"></div>
    </div>
  );
};

export default Header;
