import { useDispatch } from 'react-redux';
import { deleteFromBasket, changeNumber } from '../../redux/slices/basketSlice';
import './BasketCard.css'

const BasketCard = ({ id, img, name, finalPrice, selectedSize, productNum }) => {
    const dispatch = useDispatch();

    const handleDeleteProduct = () => {
        dispatch(deleteFromBasket(id))
    }

    const productMinus = () => {
        dispatch(changeNumber({ id, type: 'decrement' }));
    }

    const productPlus = () => {
        dispatch(changeNumber({ id, type: 'increment' }));
    }

    return (
        <div className='basket__card'>
            <div className='basket__card__product'>
                <div className='basket__image__container'>
                    <img className='basket__card__image' src={img} alt="" />
                </div>
                <div className='basket__card__info'>
                    <div className='basket__card__title'>
                        <p className='basket__product__name'>{name}</p>
                        <p className='basket__product__description'>Some description about product</p>
                        <p className='basket__product__color'>wdadadw</p>
                        <p className='basket__product__size'>{selectedSize}</p>
                    </div>
                    <div className='product__quantity'>
                        <button className='quantity__btn' onClick={productMinus}>
                            <svg className='quantity__img'>
                                <use href='#minus'></use>
                            </svg>
                        </button>
                        <p className='product__quantity__number'>{productNum}</p>
                        <button className='quantity__btn' onClick={productPlus}>
                            <svg className='quantity__img'>
                                <use href='#plus'></use>
                            </svg>
                        </button>
                    </div>
                    <span className='product__price'>{finalPrice.toFixed(2)}€</span>
                    <button className='delete__product__btn' onClick={handleDeleteProduct}>
                        <svg className='delete__product__img'>
                            <use href='#clear-basket'></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BasketCard;