import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import "./App.css";
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Menu from "./Pages/Menu";

function App() {
  return (
 <BrowserRouter>
 <Navbar/>
 <Routes>
  
  <Route path="/" element={<Home/>} />
  <Route path="menu" element={<Menu/>} />
 
  

 </Routes>
 </BrowserRouter>
  );
}

export default App;
