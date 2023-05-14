import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import AddProducts from './pages/AddProducts/AddProducts';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';
import Product from './pages/Product/Product';
import CartPage from './pages/CartPage/CartPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './features/products/productSlice';
import SelectedCategory from './pages/SelectedCategory/SelectedCategory';
import NewNavbar from './components/NewNavbar/NewNavbar';
import Footer from './components/Footer/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const isLandingPage = location.pathname === '/';

  return (
    <>
      <Router>
        <NewNavbar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Landing />
              </>
            }
          />
          <Route
            path='/addproducts'
            element={
              <>
                <AddProducts />
                <Footer />
              </>
            }
          />
          <Route
            path='/about'
            element={
              <>
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path='/products'
            element={
              <>
                <Products />
                <Footer />
              </>
            }
          />
          <Route
            path='/products/update_product/:id'
            element={
              <>
                <UpdateProduct />
                <Footer />
              </>
            }
          />
          <Route
            path='/products/:category/:subcategory'
            element={
              <>
                <SelectedCategory />
                <Footer />
              </>
            }
          />
          <Route
            path='/products/show_more/:id'
            element={
              <>
                <Product />
                <Footer />
              </>
            }
          />
          <Route
            path='/cart'
            element={
              <>
                <CartPage />
                <Footer />
              </>
            }
          />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
