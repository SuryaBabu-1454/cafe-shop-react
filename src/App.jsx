import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import "./App.css";
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import ThisSection from "./Component/ThisSection";
import Login from "./Pages/Login";

function App() {
  return (
 <BrowserRouter>
 <Navbar/>
 <Routes>
  
  <Route path="/" element={<Home/>} />
  <Route path="This-is-Us" element={<ThisSection/>} />
  <Route path="menu" element={<Menu/>} />
  <Route path="contact" element={<Contact /> } />
  <Route path="login" element={<Login /> } />
 
  

 </Routes>
 </BrowserRouter>
  );
}

export default App;
