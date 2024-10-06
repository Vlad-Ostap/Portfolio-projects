import { ImSpinner } from "react-icons/im";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMenFilter, selectWomenFilter, selectProductNameFilter } from "../../redux/slices/filterSlice";
import BackToMainLink from "../BackToMainLink/BackToMainLink";
import ProductCard from "../ProductCard/ProductCard";
import FilterOptions from "../FilterOptions/FilterOptions";
import ProductNameFilter from "../ProductNameFilter/ProductNameFilter";
import './AllProducts.css';

const AllProducts = () => {
    const [womenClothing, setWomenClothing] = useState([]);
    const [menClothing, setMenClothing] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const menFilter = useSelector(selectMenFilter);
    const womenFilter = useSelector(selectWomenFilter);
    const productName = useSelector(selectProductNameFilter);

    useEffect(() => {
        setIsLoading(true);
        fetch('/get-data')
            .then(res => res.json())
            .then(data => {
                setMenClothing(data.menClothing);
                setWomenClothing(data.womenClothing);
            })
            .catch(error => console.error('Error: ', error))
            .finally(() => setIsLoading(false))
    }, []);
    
    const menFilteredProduct = menClothing.filter(card => card.name.toLowerCase().startsWith(productName.toLowerCase().trim()));
    const womenFilteredProduct = womenClothing.filter(card => card.name.toLowerCase().startsWith(productName.toLowerCase().trim()));

    return (
        <div className="container">
            <div className="all__products">
                <div className="all__products__title">
                    <BackToMainLink />
                    <ProductNameFilter />
                    <FilterOptions />
                </div>
                {
                    isLoading ? <ImSpinner className="spinner" /> : (
                        <div className="all__clothing">
                            {
                                menFilter && menFilteredProduct.length > 0 && (
                                    <div className="men__clothing">
                                        <div className="title">
                                            <p>men</p>
                                            <div className="lane"></div>
                                        </div>
                                        {menFilteredProduct.map(card => {
                                            return <ProductCard {...card} key={card.id} />
                                        })}
                                    </div>
                                )
                            }

                            {
                                womenFilter && womenFilteredProduct.length > 0 && (
                                    <div className="women__clothing">
                                        <div className="title">
                                            <div className="lane women"></div>
                                            <p>women</p>
                                        </div>
                                        {womenFilteredProduct.map(card => {
                                            return <ProductCard {...card} key={card.id} />
                                        })}
                                    </div>
                                )
                            }
                        </div>
                    )}
            </div>
        </div>
    )
}

export default AllProducts;