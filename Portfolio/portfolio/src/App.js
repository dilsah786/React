import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Homepage from './component/Homepage/Homepage';
import {BrowserRouter} from "react-router-dom";
import {Route ,Routes} from "react-router-dom"
import About from './component/AboutMe/About';
import Projects from './component/Projects/Projects';
import Experience from './component/Experience/Experience';
import Contact from './component/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>

<BrowserRouter>
  <Routes>
    <Route path="/navbar" element={<Navbar/>}/>
  </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
