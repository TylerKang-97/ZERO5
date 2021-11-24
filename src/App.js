import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';

function App() {
  
  return (
    <div>
      <Routes>
      <Route exact path = "/" component={Home} />
      <Route path="/about" component={About} />
      </Routes>
    </div>
  );
}

export default App;
