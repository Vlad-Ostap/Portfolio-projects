import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const scrollToContent = (e) => {
        const selector = e.currentTarget.dataset.scroll;
        const section = document.querySelector(selector);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
    
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className='footer__text'>
                        <p className='footer__tilte'>trekking</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='footer__navigation'>
                        <nav className='footer__menu'>
                            <p className='footer__link' data-scroll='.main__page__text' onClick={scrollToContent}>Home</p>
                            <p className='footer__link' data-scroll='.clothes' onClick={scrollToContent}>Products</p>
                            <p className='footer__link' data-scroll='.about__container' onClick={scrollToContent}>About</p>
                            <Link to='ClothingStore/basket' className='footer__link'>Cart</Link>
                        </nav>
                        <p className='footer__author'>Design by gianluca cosetta</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;