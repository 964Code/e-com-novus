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
  const [subcategory, setSubcategory] = useState(
    selectedProduct?.subcategory || ''
  );
  const [image, setImage] = useState(selectedProduct?.image || '');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('');

  const categories = {
    electronics: {
      name: 'Electronics',
      subcategories: {
        phones: {
          name: 'Phones',
        },
        laptops: {
          name: 'Laptops',
        },
        tv: {
          name: 'TV',
        },
      },
    },
    fashion: {
      name: 'Fashion',
      subcategories: {
        mens: {
          name: 'Mens',
        },
        womens: {
          name: 'Womens',
        },
        kids: {
          name: 'Kids',
        },
      },
    },
    home: {
      name: 'Home',
      subcategories: {
        furniture: {
          name: 'Furniture',
        },
        appliances: {
          name: 'Appliances',
        },
        decor: {
          name: 'Decor',
        },
      },
    },
  };

  const mainCategories = Object.keys(categories);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // Reset subcategory when a new category is selected
    setSubcategory('');
  };

  const subCategories = categories[category]?.subcategories;

  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

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
          subcategory,
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
      setSubcategory('');
      setImage('');
      return;
    }

    const res = await dispatch(
      createProduct({ title, description, price, category, subcategory, image })
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
    setSubcategory('');
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

          {/*      <label htmlFor='category'>Category</label>
          <input
            type='text'
            name='category'
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
 */}

          <label htmlFor='category'>Category</label>
          <select name='category' id='category' onChange={handleCategoryChange}>
            <option value=''>Select a category</option>
            {mainCategories.map((mainCategory) => (
              <option key={mainCategory} value={mainCategory}>
                {categories[mainCategory].name}
              </option>
            ))}
          </select>

          {subCategories && (
            <div>
              <label htmlFor='subcategory'>Subcategory</label>
              <select
                name='subcategory'
                id='subcategory'
                value={subcategory}
                onChange={handleSubcategoryChange}
              >
                <option value=''>Select a subcategory</option>
                {Object.keys(subCategories).map((subCategoryKey) => (
                  <option key={subCategoryKey} value={subCategoryKey}>
                    {subCategories[subCategoryKey].name}
                  </option>
                ))}
              </select>
            </div>
          )}

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
