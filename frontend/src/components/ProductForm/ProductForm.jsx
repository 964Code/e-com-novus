import * as styled from './styled';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createProduct,
  updateProduct,
} from '../../features/products/productSlice';
import { useParams } from 'react-router-dom';
import { selectProductById } from '../../features/products/productSlice';
import Snackbar from '../Snackbar/Snackbar';

function ProductForm() {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Get product by id if id is present
  const selectedProduct = id
    ? useSelector((state) => selectProductById(state, id))
    : null;

  const [title, setTitle] = useState(selectedProduct?.title || '');
  const [description, setDescription] = useState(
    selectedProduct?.description || ''
  );
  const [price, setPrice] = useState(selectedProduct?.price || '');
  const [category, setCategory] = useState(selectedProduct?.category || '');
  const [image, setImage] = useState(selectedProduct?.image || '');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      const res = await dispatch(
        updateProduct({
          _id: selectedProduct._id,
          title,
          description,
          price,
          category,
          image,
        })
      );
      if (res.error) {
        setSnackbarMessage(res.payload);
        setSnackbarType('error');
      } else {
        setSnackbarMessage('Product created successfully!');
        setSnackbarType('success');
      }
      // reset form
      setTitle('');
      setDescription('');
      setPrice('');
      setCategory('');
      setImage('');
      return;
    }

    const res = await dispatch(
      createProduct({ title, description, price, category, image })
    );
    if (res.error) {
      setSnackbarMessage(res.payload);
      setSnackbarType('error');
    } else {
      setSnackbarMessage('Product created successfully!');
      setSnackbarType('success');
    }
    console.log(res.payload);
    // reset form
    setTitle('');
    setDescription('');
    setPrice('');
    setCategory('');
    setImage('');
  };

  return (
    <section>
      <Snackbar type={snackbarType} message={snackbarMessage} />
      <form onSubmit={onSubmit}>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor='price'>Price</label>
          <input
            type='text'
            name='price'
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label htmlFor='category'>Category</label>
          <input
            type='text'
            name='category'
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <label htmlFor='image'>Image</label>
          <input
            type='text'
            name='image'
            id='image'
            value={image}
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
          <button
            type='submit'
            onClick={() => {
              onSubmit;
            }}
          >
            {id ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProductForm;
