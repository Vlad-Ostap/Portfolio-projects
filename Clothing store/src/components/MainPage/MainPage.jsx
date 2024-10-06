import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './MainPage.css'

const MainPage = () => {
    const [burgerMenu, setBurgerMenu] = useState(window.innerWidth <= 860);
    const mainPageRef = useRef(null);
    const navbarRef = useRef(null);

    const handleScrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }

    const handleActiveBurgerMenu = () => {
        setBurgerMenu(window.innerWidth <= 860);
    }

    const handleFixedNavbar = () => {
        if (window.scrollY >= mainPageRef.current.getBoundingClientRect().height) {
            navbarRef.current.classList.add('fixed');
        } else {
            navbarRef.current.classList.remove('fixed');
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleActiveBurgerMenu);
        window.addEventListener('scroll', handleFixedNavbar);
        return () => {
            window.removeEventListener('resize', handleActiveBurgerMenu);
            window.removeEventListener('scroll', handleFixedNavbar);
        }
    }, [])

    return (
        <div className='main__page' ref={mainPageRef}>
                <div className='container'>
                    <div className='navbar' ref={navbarRef}>
                        <div className='navbar__content'>
                            <Link className='logo' to='/'>
                                <img className='logo' src="./src/assets/img/logo.svg" alt="" />
                            </Link>
                            <nav className='nav' style={burgerMenu ? { justifyContent: 'end' } : { justifyContent: 'space-between' }}>
                                {
                                    burgerMenu ? <BurgerMenu /> : (
                                        <>
                                            <Link className='nav__link' to='/'>Home</Link>
                                            <Link className='nav__link' to='/all-products'>Products</Link>
                                            <Link to='/basket'>
                                                <svg className='nav__link__img'>
                                                    <use href='#basket'></use>
                                                </svg>
                                            </Link>
                                        </>
                                    )
                                }
                            </nav>
                        </div>
                    </div>
                    <div className='main__page__text'>
                        <h1 className='main__top__text'>Our clothing , your comfort</h1>
                        <p className='main__bottom__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                    </div>

                </div>
                <svg className='arrow__down__button' onClick={handleScrollDown}>
                    <use href='#arrow-down-main'></use>
                </svg>
            </div>
    )
}

export default MainPage;