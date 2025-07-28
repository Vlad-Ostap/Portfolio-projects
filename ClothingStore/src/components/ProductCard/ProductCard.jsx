import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/slices/basketSlice';
import './ProductCard.css';

const ProductCard = (props) => {
    const { img, name, startPrice, sizes, quantity } = props;
    const [selectedSize, setSelectedSize] = useState('');
    const [addInfo, setAddInfo] = useState({ nameInfo: '', typeInfo: '' });
    const dispatch = useDispatch();

    const handleSizeChanged = (event) => {
        setSelectedSize(event.target.value);
    }

    const clearAddInfo = () => {
        setTimeout(() => {
            setAddInfo('');
        }, 2000);
    }

    const handleAddToBasket = () => {
        if (selectedSize) {
            const productNum = 1;
            const finalPrice = startPrice;
            const productForBasket = { id: uuidv4(), img, name, startPrice, finalPrice, quantity, selectedSize, productNum }
            dispatch(addToBasket(productForBasket));
            setAddInfo({ nameInfo: 'Successfully added to cart', typeInfo: 'success' });
            clearAddInfo();
        } else {
            setAddInfo({ nameInfo: 'Select a size!', typeInfo: 'error' });
            clearAddInfo();
        }
    }

    return (
        <div className='card__container'>
            <div className="card">
                <div className='product__option'>
                    <select className='product__size' value={selectedSize} onChange={handleSizeChanged}>
                        <option value='' style={{ display: 'none' }} defaultValue>SIZE</option>
                        {sizes.map((value, index) => {
                            return (<option key={index} value={value}>{value}</option>)
                        })}
                    </select>

                    <button className='product__button' onClick={handleAddToBasket}>Add to basket</button>
                </div>

                <div className="product__img">
                    <img src={img} alt=''></img>
                </div>
                <div className="product__info">
                    <span>{name}</span>
                    <p>{startPrice.toFixed(2)}€</p>
                </div>
            </div>
            <div className='add__info'>
                {addInfo && (<p className={addInfo.typeInfo}>{addInfo.nameInfo}</p>)}
            </div>
        </div>
    )
}

export default ProductCard;