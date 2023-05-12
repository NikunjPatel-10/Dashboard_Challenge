import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import CompanyForm from "./components/CompanyForm/CompanyForm";
import ContextProvider from "./contexts/ContextProvider";

function App() {
  return (
    <div>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/company-form" element={<CompanyForm />}>
            <Route path="add" element={<CompanyForm />}></Route>
            <Route path="edit/:id" element={<CompanyForm />}></Route>
          </Route>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
