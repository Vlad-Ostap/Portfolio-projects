import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasket, clearBasket } from '../../redux/slices/basketSlice';
import BasketCard from '../BasketCard/BasketCard';
import BackToMainLink from '../BackToMainLink/BackToMainLink';
import './Basket.css';

const Basket = () => {
    const dispatch = useDispatch();
    const basketList = useSelector(selectBasket)
    const [ totalPrice, setTotalPrice ] = useState(0);

    const handleClearBasket = () => {
        dispatch(clearBasket());
    }

    useEffect(() => {
        const newTotalPrice = basketList.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.finalPrice;
        }, 0);
        setTotalPrice(newTotalPrice.toFixed(2));
    }, [basketList])

    return (

        <div className='container'>
            <div className='basket'>
                <div className='basket__list'>
                    <div className='basket__menu'>
                        <BackToMainLink />
                        <div className='basket__title'>
                            <p>Basket</p>
                            <button className='clear__basket__button' onClick={handleClearBasket}>
                                <svg className='clear__basket__img'>
                                    <use href='#clear-basket'></use>
                                </svg>
                                <p className='clear__basket__text'>empty trash</p>
                            </button>
                        </div>
                    </div>
                    <div className='basket__card__container'>
                        {
                            basketList.map(card => {
                                return <BasketCard {...card} key={card.id} />
                            })
                        }
                    </div>
                </div>
                <div className='basket__info'>
                    <div className='basket__product__quantity'>
                        Number of goods
                        <span>{basketList.length} pcs.</span>
                    </div>
                    <span className='line'></span>
                    <div className='total__price'>
                        Total
                        <span>{totalPrice}€</span>
                    </div>
                    <span className='line'></span>
                    <button className='payment__btn'>payment</button>
                </div>
            </div>
        </div>

    )
}

export default Basket;