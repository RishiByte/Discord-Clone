import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/index.css';

function App() {
  const [theme, setTheme] = useState('dark-mode');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark-mode' ? 'light-mode' : 'dark-mode');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home toggleTheme={toggleTheme} theme={theme} />} />
      </Routes>
    </Router>
  );
}

export default App;
