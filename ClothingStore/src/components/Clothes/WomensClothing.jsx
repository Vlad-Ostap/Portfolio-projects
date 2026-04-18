import { ImSpinner } from "react-icons/im";
import { useEffect, useState } from 'react';
import useSWR from "swr";
import ProductCard from '../ProductCard/ProductCard';
import useScroll from '../../castomHooks/useScroll';
import './Clothes.css';

const fetcher = url => fetch(url).then(res => res.json())

const WomensClothing = () => {
    const { data, error } = useSWR('/api/get-data', fetcher);
    const [womenClothing, setWomenClothing] = useState([]);
    const { scrollBar, numScroll, sumScroll, isScrolling, scrollLeft, scrollRight } = useScroll(womenClothing.length);

    useEffect(() => {
            setWomenClothing([
        {
            id: 'women_1',
            img: '/img/woman/jacket.png',
            name: 'jacket',
            startPrice: 60.00,
            sizes: ['small', 'medium', 'large'],
            quantity: 6
        },
        {
            id: 'women_2',
            img: '/img/woman/trekking shoes.png',
            name: 'trekking shoes',
            startPrice: 80.00,
            sizes: ['small', 'large'],
            quantity: 3
        },
        {
            id: 'women_3',
            img: '/img/woman/t-shirt.png',
            name: 't-shirt',
            startPrice: 20.00,
            sizes: ['small', 'medium', 'large'],
            quantity: 4
        },
        {
            id: 'women_4',
            img: '/img/woman/jacket.png',
            name: 'jacket',
            startPrice: 60.00,
            sizes: ['small', 'medium', 'large'],
            quantity: 6
        },
        {
            id: 'women_5',
            img: '/img/woman/trekking shoes.png',
            name: 'trekking shoes',
            startPrice: 80.00,
            sizes: ['small', 'large'],
            quantity: 3
        },
        {
            id: 'women_6',
            img: '/img/woman/t-shirt.png',
            name: 't-shirt',
            startPrice: 20.00,
            sizes: ['small', 'medium', 'large'],
            quantity: 4
        }
    ]);
        }, []
    );

    return (
        <div className="container">
            <div className="clothes">
                <div className="title">
                    <div className="lane women"></div>
                    <p>women</p>
                </div>
                {<>
                    <div className='scroll__buttons'>
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
                        {womenClothing.map(card => {
                            return <ProductCard {...card} key={card.id} />
                        })}
                    </div>
                </>}
            </div>
        </div>
    )
}

export default WomensClothing;