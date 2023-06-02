import React from "react";
import ProtectedRoutes from "../ProtectedRoutes";
import Header from "../Header/Header";
import "./Master.css";

const Master = () => {
  return (
    <div className="master-wrapper">
      <Header />
      <ProtectedRoutes />
    </div>
  );
};

export default Master;
