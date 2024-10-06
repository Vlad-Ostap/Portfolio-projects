import { useSelector } from 'react-redux';
import { selectMenFilter, selectWomenFilter } from '../../redux/slices/filterSlice';
import MainPage from '../MainPage/MainPage';
import ProductFilter from '../ProductFilter/ProductFilter';
import MensClothing from '../Clothes/MensСlothing';
import WomensClothing from '../Clothes/WomensClothing';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import './MainLayout.css';

const MainLayout = () => {
    const menFilter = useSelector(selectMenFilter);
    const womenFilter = useSelector(selectWomenFilter);

    return (
        <>
            <MainPage />
            <ProductFilter />
            {menFilter && <MensClothing />}
            {womenFilter && <WomensClothing />}
            <AboutUs />
            <Footer />
        </>
    )
}

export default MainLayout;