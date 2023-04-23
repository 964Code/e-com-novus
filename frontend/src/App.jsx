import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import AddProducts from './pages/AddProducts/AddProducts';
import Navbar from './components/Navbar/Navbar.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './features/products/productSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/addproducts' element={<AddProducts />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
