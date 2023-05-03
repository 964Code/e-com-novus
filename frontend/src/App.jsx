import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import AddProducts from './pages/AddProducts/AddProducts';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';
import Product from './pages/Product/Product';
import CartPage from './pages/CartPage/CartPage';
import Navbar from './components/Navbar/Navbar.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './features/products/productSlice';
import SelectedCategory from './pages/SelectedCategory/SelectedCategory';
import NewNavbar from './components/NewNavbar/NewNavbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Router>
        <NewNavbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/addproducts' element={<AddProducts />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route
            path='/products/update_product/:id'
            element={<UpdateProduct />}
          />
          <Route
            path='/products/:category/:subcategory'
            element={<SelectedCategory />}
          />
          <Route path='/products/show_more/:id' element={<Product />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
