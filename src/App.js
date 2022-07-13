import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
