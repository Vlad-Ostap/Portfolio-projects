import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';


const BurgerMenu = () => {
    const [isActive, setIsActive] = useState(false);
    const burgerMenuRef = useRef(null);
    const menuItemRef = useRef([]);

    const showMenu = () => {
        setIsActive(!isActive);
    }

    const addToRef = (el) => {
        if (el && !menuItemRef.current.includes(el)) {
            menuItemRef.current.push(el);
        }
    }

    return (
        <div className='burger__menu' ref={burgerMenuRef}>
            <button className={`burger__button ${isActive ? 'active' : ''} `} type='button' onClick={showMenu}>
                <span className='burger__item before' ref={addToRef}></span>
                <span className='burger__item middle' ref={addToRef}></span>
                <span className='burger__item after' ref={addToRef}></span>
            </button>
            {
                isActive && (
                    <nav className='burger__navbar'>
                        <Link className='burger__link' to='/'>Home</Link>
                        <Link className='burger__link' to='/all-products'>Products</Link>
                        <Link className='burger__link' to='/basket'>Basket</Link>
                    </nav>
                )
            }
        </div>
    )
}

export default BurgerMenu;