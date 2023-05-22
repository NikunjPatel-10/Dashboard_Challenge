import React from "react";
import profile from "./../../assets/Images/profile.jpg";

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
import {
  HomeOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  ShoppingOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
function Sidebar({ theme, toggleTheme }) {
  const headerStyle = {
    backgroundColor: theme === "dark" ? "black" : "#DFE6ED",
    color: theme === "dark" ? "#DFE6ED" : "black",
  };
  return (
    <aside className="sidebar-wrapper" style={headerStyle}>
      <div className="name-size  border-gray">
        <div className="icon-wrapper">
          <span className="icon">PM</span>
        </div>
      </div>
      <div className="sidebar">
        <div>
          <nav className="top-nav">
            <ul className="navbar-nav p-0">
              <li className="nav-item">
                <HomeOutlined />
              </li>
              <li className="nav-item">
                <ClockCircleOutlined />
              </li>
              <li className="nav-item">
                <TeamOutlined />
              </li>
              <li className="nav-item">
                <ShoppingOutlined />
              </li>
            </ul>
          </nav>
        </div>
        <div className=" d-block d-lg-none">
          <nav className="nav  d-flex flex-column justify-content-center align-items-center">
            <NavLink className="nav-item " to={"/menu"}>
              <UnorderedListOutlined />
            </NavLink>
            <NavLink className="nav-item " to={"/align-data"}>
              <AlignCenterOutlined />
            </NavLink>
            <NavLink className="nav-item" to={"/sliders"}>
              <SlidersOutlined />
            </NavLink>
            <NavLink className="nav-item" to={"/database"}>
              <DatabaseOutlined />
            </NavLink>
            <NavLink className="nav-item " to={"/graph-statics"}>
              <LineChartOutlined />
            </NavLink>

            <NavLink className="nav-item" to={"/calender"}>
              <CalendarOutlined />
            </NavLink>
            <NavLink className="nav-item" to={"/file"}>
              <FileOutlined />
            </NavLink>
          </nav>
        </div>
        <div>
          <nav className="bottom-nav">
            <ul className="navbar-nav p-0 mb-0">
              <li className="nav-item">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    onChange={toggleTheme}
                  />
                </div>
              </li>
              <li className="nav-item">
                <PlusOutlined />
              </li>
              <li className="nav-item">
                <QuestionCircleOutlined />
              </li>
              <li className="nav-item">
                <figure className="img-wrapper mb-0">
                  <img src={profile} />
                </figure>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
