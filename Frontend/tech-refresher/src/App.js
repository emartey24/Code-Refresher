import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbarcomponent from "./Components/Navbarcomponent";
import HowtoPlay from "./Components/HowtoPlay";
import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import Donate from "./Components/Donate";


function App() {




  
  return (
    <>
     <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbarcomponent/>}>
            <Route index element={<Home/>} />
            <Route path="howtoplay" element={<HowtoPlay />} /> 
            <Route path="login" element={<LogIn />} /> 
            <Route path="Donate" element={<Donate />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
      </>

  );
}

export default App;
