import React from 'react';
import ProductForm from '../../components/ProductForm/ProductForm';

function UpdateProduct() {
  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
          marign: 10,
          margin: '20px 0px 10px 0',
        }}
      >
        Update Product-page
      </h2>
      <ProductForm />
    </div>
  );
}

export default UpdateProduct;
