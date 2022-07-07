import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Books from './components/Books';
import './index.css';
import Categories from './components/Categories';

function App() {
  return (
    <div className="books-container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
