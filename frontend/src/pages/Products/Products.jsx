import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchProducts,
  selectProducts,
  deleteProduct,
} from '../../features/products/productSlice';
import { Link } from 'react-router-dom';

function Products() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  // Return loading if products are not fetched
  if (products.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.title} />
          <button
            onClick={() => {
              dispatch(deleteProduct(product._id));
            }}
          >
            Delete
          </button>
          <Link to={`/products/update_product/${product._id}`}>
            <button onClick={() => {}}>edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
