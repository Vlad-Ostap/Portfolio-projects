import { useDispatch, useSelector } from 'react-redux';
import { selectProductNameFilter, setProductNameFilter } from '../../redux/slices/filterSlice';
import './ProductNameFilter.css';

const ProductNameFilter = () => {
    const productName = useSelector(selectProductNameFilter);
    const dispatch = useDispatch();

    const handleChangeProductName = (e) => {
        dispatch(setProductNameFilter(e.target.value));
    }

    return (
        <input className='name__filter' type="text" placeholder='Enter name of product' value={productName} onChange={(e) => handleChangeProductName(e)}/>
    )
}

export default ProductNameFilter;