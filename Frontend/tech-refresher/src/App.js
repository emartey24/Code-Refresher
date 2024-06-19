import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
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
          <Route path="studyguide" element={<HowtoPlay />} />
          <Route path="login" element={<LogIn onLogin={handleLogin} />} />
          <Route path="flashcards" element={<Game />} />
          <Route path="shop" element={<Donate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

