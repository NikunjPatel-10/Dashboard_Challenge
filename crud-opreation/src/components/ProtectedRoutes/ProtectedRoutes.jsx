import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const login = localStorage.getItem("auth");
    if (!login) {
      navigate("/login");
    } else if (login && location.pathname === "/login") {
      navigate("/home");
    }
    console.log(location);
  }, [navigate, location.pathname]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;
