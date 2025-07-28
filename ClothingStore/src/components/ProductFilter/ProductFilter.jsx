import { Link } from 'react-router-dom';
import FilterOptions from '../FilterOptions/FilterOptions';
import './ProductFilter.css';

const ProductFilter = () => {

    return (
        <div className="product__filter">
            <div className='container'>
                <div className='filter'>
                    <FilterOptions />
                    <Link to='/all-products' className='filter__link'>see all products</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductFilter;