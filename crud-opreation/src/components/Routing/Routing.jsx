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
import Master from "../Master/Master";

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/" element={<Master />}>
        <Route path="/" element={<Navigate to={"/home"} />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/company-form" element={<CompanyForm />}>
          <Route path="add" element={<CompanyForm />}></Route>
          <Route path="edit/:id" element={<CompanyForm />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default Routing;
