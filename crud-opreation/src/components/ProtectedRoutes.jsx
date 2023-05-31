import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  // const { Component } = props;

  const [login, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(localStorage.getItem("auth"));

    if (!login) {
      navigate("../login");
    }
  });
  return (
    <>
      {" "}
      <Outlet />{" "}
    </>
  );
};

export default ProtectedRoutes;
