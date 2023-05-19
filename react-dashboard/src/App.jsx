import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import GraphStatics from "./pages/GraphStatics";
import Menu from "./pages/Menu";
import Sliders from "./pages/Sliders";
import Database from "./pages/Database";
import Files from "./pages/Files";
import AlignData from "./pages/AlignData";
import Calendar from "./pages/Calender";
import { Route, Routes } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const sidebarStyle = {
    backgroundColor: theme === "dark" ? "#101321" : "white",
    color: theme === "dark" ? "white" : "#101321",
  };
  return (
    <>
      <div className="d-flex h-100 w-100">
        <div className="h-100">
          <Sidebar toggleTheme={toggleTheme} theme={theme} />
        </div>
        <div
          className="flex-grow-1 main-section d-flex flex-column"
          style={sidebarStyle}
        >
          <div>
            <Header />
          </div>

          <div className="flex-grow-1 overflow-hidden">
            <Routes>
              <Route path="/" element={<GraphStatics />}></Route>
              <Route path="/graph-statics" element={<GraphStatics />}></Route>
              <Route path="/menu" element={<Menu />}></Route>
              <Route path="/sliders" element={<Sliders />}></Route>
              <Route path="/database" element={<Database />}></Route>
              <Route path="/files" element={<Files />}></Route>
              <Route path="/align-data" element={<AlignData />}></Route>
              <Route path="/calender" element={<Calendar />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
