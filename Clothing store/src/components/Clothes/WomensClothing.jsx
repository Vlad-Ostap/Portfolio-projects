import { ImSpinner } from "react-icons/im";
import { useEffect, useState } from 'react';
import useSWR from "swr";
import ProductCard from '../ProductCard/ProductCard';
import useScroll from '../../castomHooks/useScroll';
import './Clothes.css';

const fetcher = url => fetch(url).then(res => res.json())

const WomensClothing = () => {
    const { data, error } = useSWR('/get-data', fetcher);
    const [womenClothing, setWomenClothing] = useState([]);
    const { scrollBar, numScroll, sumScroll, isScrolling, scrollLeft, scrollRight } = useScroll(womenClothing.length);

    useEffect(() => {
        if (data) {
            setWomenClothing(data.womenClothing);
        }
    }, [data]);

    return (
        <div className="container">
            <div className="clothes">
                <div className="title">
                    <div className="lane women"></div>
                    <p>women</p>
                </div>
                {!data ? <ImSpinner className="spinner" /> : <>
                    <div className='scroll__buttons'>
                        <p className='scroll__number'>{`${numScroll}/${sumScroll}`}</p>
                        <button className='scroll__button' onClick={scrollLeft} disabled={isScrolling || numScroll === 1}>
                            <svg className='scroll__img'>
                                <use href='#arrow-left-scroll'></use>
                            </svg>
                        </button>

                        <button className='scroll__button' onClick={scrollRight} disabled={isScrolling || numScroll === sumScroll}>
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