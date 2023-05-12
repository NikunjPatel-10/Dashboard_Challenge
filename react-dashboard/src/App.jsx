import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="wrapper text-primary">
        <div className="aside-wrapper">
          <Sidebar />
        </div>
        <div className="main-section">
          <div>header</div>
          <div>main</div>
        </div>
      </div>
    </>
  );
}

export default App;
