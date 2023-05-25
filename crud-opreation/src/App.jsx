import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import CompanyForm from "./components/CompanyForm/CompanyForm";
import ContextProvider from "./contexts/ContextProvider";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const path = useLocation();
  const hideHeaderRoutes = ["/login", "/registration"];
  const hideHeader = hideHeaderRoutes.includes(path.pathname);
  console.log(path.pathname);

  return (
    <div className="main-wrapper">
      <ContextProvider>
        {!hideHeader && <Header />}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
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
      </ContextProvider>
    </div>
  );
}

export default App;
