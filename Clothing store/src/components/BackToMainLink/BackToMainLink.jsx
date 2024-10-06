import { Link } from 'react-router-dom';
import './BackToMainLink.css';

const BackToMainLink = () => {
    return (
        <Link className='to__main__link' to={'/'}>
            <svg className='arrow__left'>
                <use href='#arrow-left'></use>
            </svg>
            To main
        </Link>
    )
}

export default BackToMainLink;