import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from "./Home/Home";
import History from './History/History';
import Question from './Question/Question';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;