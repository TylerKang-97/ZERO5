import { BrowserRouter , Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
