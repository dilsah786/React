import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Homepage from './component/Homepage/Homepage';
import {BrowserRouter, Link} from "react-router-dom";
import {Route ,Routes} from "react-router-dom"
import About from './component/AboutMe/About';
import Projects from './component/Projects/Projects';
import Experience from './component/Experience/Experience';
import Contact from './component/Contact/Contact';
import Home from '@mui/icons-material/Home';
function App() {
  return (
    <div className="App">
  <Navbar/>
  <Homepage/>
  <About/>
  <Projects/>  
  <Experience/>
  <Contact/>

  <Routes>
    <Route path="/navbar" element={<Navbar/>}/>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/project" element={<Projects/>}/>
    <Route path="/experience" element={<Experience/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>


    </div>
  );
}

export default App;
