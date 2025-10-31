import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Learn from './pages/learn';


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
    <Router>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
       <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/learn" element={<Learn />} />
         </Routes>
      </Router>
    </>
  );
}