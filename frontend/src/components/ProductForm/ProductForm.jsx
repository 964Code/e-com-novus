import * as styled from './styled';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/* import { createProduct } from '../../features/products/productSlice'; */

function ProductForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    /*   dispatch(createProduct({ title, description, price, category, image })); */
    // reset form
    setTitle('');
    setDescription('');
    setPrice('');
    setCategory('');
    setImage('');
  };

  return (
    <section>
      <form
        onSubmit={onSubmit}
        /* style={{ display: 'flex', flexDirection: 'column' }} */
      >
        '
        <div
          className='form-group'
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            margin: '0 auto',
          }}
        >
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor='price'>Price</label>
          <input
            type='text'
            name='price'
            id='price'
            onChange={(e) => setPrice(e.target.value)}
          />

          <label htmlFor='category'>Category</label>
          <input
            type='text'
            name='category'
            id='category'
            onChange={(e) => setCategory(e.target.value)}
          />

          <label htmlFor='image'>Image</label>
          <input
            type='text'
            name='image'
            id='image'
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div
          className='form-group'
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            margin: '0 auto',
          }}
        >
          <button type='submit'>Add product</button>
        </div>
      </form>
    </section>
  );
}

export default ProductForm;
