import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import GraphStatics from "./pages/GraphStatics";

function App() {
  return (
    <>
      <div className="d-flex h-100 w-100">
        <div className="h-100">
          <Sidebar />
        </div>
        <div className="flex-grow-1 main-section d-flex flex-column">
          <div>
            <Header />
          </div>
          <div className="flex-grow-1">
            <GraphStatics />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
