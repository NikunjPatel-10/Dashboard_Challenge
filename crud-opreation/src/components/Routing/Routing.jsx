import {
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import React from "react";
import Home from "./../../pages/Home/Home";
import About from "./../../pages/About/About";
import Contact from "./../../pages/Contact/Contact";
import CompanyForm from "./../CompanyForm/CompanyForm";
import Login from "./../../pages/Login/Login";
import Registration from "./../../pages/Registration/Registration";
import ProtectedRoutes from "./../ProtectedRoutes";

const Routing = () => {
  const navigate = useNavigate();

  // make it reuable by moving it from here to
  const checkLoggedIn = () => {
    const userData = localStorage.getItem("auth");

    if (userData) {
      return true;
    }
    navigate("../login");
    return false;
  };
  const loggedIn = checkLoggedIn;

  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/login" />}></Route> */}
      <Route>
        {loggedIn ? (
          <Route path="/" element={<Navigate to="/home" />}></Route>
        ) : (
          <Route path="/" element={<Navigate to="/login" />}></Route>
        )}
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route
        path="/home"
        element={<ProtectedRoutes Component={Home} />}
      ></Route>
      <Route
        path="/about"
        element={<ProtectedRoutes Component={About} />}
      ></Route>
      <Route
        path="/contact"
        element={<ProtectedRoutes Component={Contact} />}
      ></Route>
      <Route
        path="/company-form"
        element={<ProtectedRoutes Component={CompanyForm} />}
      >
        <Route path="add" element={<CompanyForm />}></Route>
        <Route path="edit/:id" element={<CompanyForm />}></Route>
      </Route>
    </Routes>
  );
};

export default Routing;
