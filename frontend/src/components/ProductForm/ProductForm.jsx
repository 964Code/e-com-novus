import * as S from './styled';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createProduct,
  updateProduct,
} from '../../features/products/productSlice';
import { useParams } from 'react-router-dom';
import { selectProductById } from '../../features/products/productSlice';
import Snackbar from '../Snackbar/Snackbar';
import { categoryData } from '../../data/categories/categories';

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

  const categories = categoryData;
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
      <S.FormContainer onSubmit={onSubmit}>
        <S.FormGroup>
          <S.FormLabel htmlFor='title'>Title</S.FormLabel>
          <S.FormInput
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.FormLabel htmlFor='description'>Description</S.FormLabel>
          <S.FormInputDescription
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.FormLabel htmlFor='price'>Price</S.FormLabel>
          <S.FormInput
            type='text'
            name='price'
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.FormLabel htmlFor='category'>Category</S.FormLabel>
          <S.FormSelect
            name='category'
            id='category'
            value={category}
            onChange={handleCategoryChange}
          >
            <option value=''>Select a category</option>
            {mainCategories.map((mainCategory) => (
              <option key={mainCategory} value={mainCategory}>
                {categories[mainCategory].name}
              </option>
            ))}
          </S.FormSelect>
        </S.FormGroup>

        {subCategories && (
          <S.FormGroup>
            <S.FormLabel htmlFor='subcategory'>Subcategory</S.FormLabel>
            <S.FormSelect
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
            </S.FormSelect>
          </S.FormGroup>
        )}

        <S.FormGroup>
          <S.FormLabel htmlFor='image'>Image URL</S.FormLabel>
          <S.FormInput
            type='text'
            name='image'
            id='image'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.SubmitButton type='submit'>
            {id ? 'Update' : 'Create'}
          </S.SubmitButton>
        </S.FormGroup>
      </S.FormContainer>
    </section>
  );
}

export default ProductForm;
