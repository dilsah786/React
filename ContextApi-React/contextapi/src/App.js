import "./App.css";
// import Data from "./Component/Data";
import { useContext } from "react";
import Login from "./Component/Login";
import { AuthContext } from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Error from "./Component/Error";
import Contact from "./Component/Contact";
import Logout from "./Component/Logout";
import MyContext, { MyContextComponent } from "./Context/MyContext";
import { MyProvider } from "./Context/MyContext";
import { Provider } from "react";

function App() {
  const value = useContext(AuthContext);
  const { isAuth, LoginFun, LogoutFun } = value;
  console.log(value);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}>
            <Route path="*" element={<Error />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>

     

      <div className="App">
        <h1> Dilnawaz </h1>
        <h3>
          User Auth Status : {isAuth ? "Authenticated " : "Not Authenticated"}
        </h3>
      </div>
    </>
  );
}

export default App;
