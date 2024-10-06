import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const scrollToAbout = () => {
        const aboutUs = document.querySelector('.about__container');
        aboutUs.scrollIntoView({
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
                            <Link className='footer__link'>credits</Link>
                            <Link className='footer__link'>privacy</Link>
                            <p className='footer__link' onClick={scrollToAbout}>about</p>
                            <Link className='footer__link'>contact</Link>
                        </nav>
                        <p className='footer__author'>Design by gianluca cosetta</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;