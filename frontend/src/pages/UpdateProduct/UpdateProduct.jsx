import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductForm from '../../components/ProductForm/ProductForm';

function UpdateProduct() {
  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
          marign: 10,
          /*     borderStyle: 'solid',
          borderColor: 'red', */
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
