import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbarcomponent from './Components/Navbarcomponent';
import HowtoPlay from './Components/HowtoPlay';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Donate from './Components/Donate';
import Game from './Components/Game';
import RegisterPage from './Components/RegisterPage';

function App() {
  const handleLogin = () => {
    // Navigate to the home page after login
    console.log('Login successful');
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="home" element={<Home />} />
          <Route path="howtoplay" element={<HowtoPlay />} />
          <Route
            path="login"
            element={<LogIn onLogin={handleLogin} />}
          />
          <Route path="shop" element={<Donate />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

