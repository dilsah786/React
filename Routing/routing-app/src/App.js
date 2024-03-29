import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Component/Routing/AllRoutes";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
