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

const Header = () => {
  return (
    <div className=" d-flex justify-content-between header-size border-bottom">
      <div className=" ms-4 d-flex justify-content-between">
        <div className="d-flex justify-content-center align-items-center">
          <h4 className=" fst-normal text-white mb-0 ">Govalle Construction</h4>
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
      <div className="d-flex justify-content-center align-items-center">
        <nav className="nav h-100 d-flex justify-content-center align-items-center">
          <a className="nav-link ">
            <UnorderedListOutlined />
          </a>
          <a className="nav-link ">
            <AlignCenterOutlined />
          </a>
          <a className="nav-link ">
            <SlidersOutlined />
          </a>
          <a className="nav-link">
            <DatabaseOutlined />
          </a>
          <a className="nav-link active">
            <LineChartOutlined />
          </a>

          <a className="nav-link ">
            <CalendarOutlined />
          </a>
          <a className="nav-link">
            <FileOutlined />
          </a>
        </nav>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
