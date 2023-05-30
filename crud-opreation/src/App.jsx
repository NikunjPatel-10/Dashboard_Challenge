import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Routing from "./components/Routing/Routing";
import ContextProvider from "./contexts/ContextProvider";

function App() {
  const path = useLocation();
  const hideHeaderRoutes = ["/login", "/registration"];
  const hideHeader = hideHeaderRoutes.includes(path.pathname);
  console.log(path.pathname);
  return (
    <div className="main-wrapper">
      <ContextProvider>
        {!hideHeader && <Header />}
        <Routing />
      </ContextProvider>
    </div>
  );
}

export default App;
