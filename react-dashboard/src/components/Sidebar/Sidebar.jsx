import React from "react";
import "./Sidebar.css";
import profile from "./../../assets/Images/profile.jpg";
import {
  HomeOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  ShoppingOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
function Sidebar() {
  return (
    <aside className="sidebar-wrapper">
      <div className="icon-wrapper">
        <span className="icon">PM</span>
      </div>
      <div className="sidebar">
        <div>
          <nav className="top-nav">
            <ul className="navbar-nav">
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
        <div>
          <nav className="bottom-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <PlusOutlined />
              </li>
              <li className="nav-item">
                <QuestionCircleOutlined />
              </li>
              <li className="nav-item">
                <figure className="img-wrapper">
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
