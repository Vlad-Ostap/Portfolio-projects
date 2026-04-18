import { ImSpinner } from "react-icons/im";
import { useEffect, useState } from 'react';
import useSWR from "swr";
import ProductCard from '../ProductCard/ProductCard';
import useScroll from '../../castomHooks/useScroll';
import './Clothes.css';

const fetcher = url => fetch(url).then(res => res.json())

const MensClothing = () => {
    const { data, error } = useSWR('/api/get-data', fetcher);
    const [menClothing, setMenClothing] = useState([]);
    const { scrollBar, numScroll, sumScroll, isScrolling, scrollLeft, scrollRight } = useScroll(menClothing.length);

    useEffect(() => {
            setMenClothing([
        {
            id: 'men_1',
            img: '/img/man/t-shirt.png',
            name: 't-shirt',
            startPrice: 5.30,
            sizes: ['medium', 'large'],
            quantity: 2
        },
        {
            id: 'men_2',
            img: '/img/man/pants forclaz.png',
            name: 'pants forclaz',
            startPrice: 30.00,
            sizes: ['small', 'medium'],
            quantity: 3
        },
        {
            id: "men_3",
            img: '/img/man/backpack.png',
            name: 'backpack',
            startPrice: 60.00,
            sizes: ['small', 'medium', 'large'],
            quantity: 5
        },
        {
            id: 'men_4',
            img: '/img/man/t-shirt.png',
            name: 't-shirt',
            startPrice: 5.30,
            sizes: ['medium', 'large'],
            quantity: 2
        },
        {
            id: 'men_5',
            img: '/img/man/pants forclaz.png',
            name: 'pants forclaz',
            startPrice: 30.00,
            sizes: ['small', 'medium'],
            quantity: 3
        },
        {
            id: "men_6",
            img: '/img/man/backpack.png',
            name: 'backpack',
            startPrice: 60.00,
            sizes: ['small', 'medium', 'large'],
            quantity: 5
        }
    ]);
        }, []
    );

    return (
        <div className="container">
            <div className="clothes">
                <div className="title">
                    <p>men</p>
                    <div className="lane"></div>
                </div>
                {<>
                    <div className='scroll__buttons men'>
                        <p className='scroll__number'>{`${numScroll}/${sumScroll}`}</p>
                        <button className='scroll__button' onClick={scrollLeft} disabled={isScrolling}>
                            <svg className='scroll__img'>
                                <use href='#arrow-left-scroll'></use>
                            </svg>
                        </button>

                        <button className='scroll__button' onClick={scrollRight} disabled={isScrolling}>
                            <svg className='scroll__img'>
                                <use href='#arrow-right-scroll'></use>
                            </svg>
                        </button>
                    </div>
                    <div ref={scrollBar} className='product__container'>
                        {menClothing.map(card => {
                            return <ProductCard {...card} key={card.id} />
                        })}
                    </div>
                </>}
            </div>
        </div>
    )
}

export default MensClothing;