import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchProducts,
  selectProducts,
  deleteProduct,
} from '../../features/products/productSlice';

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
          <button
            onClick={() => {
              console.log('edit');
            }}
          >
            edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
