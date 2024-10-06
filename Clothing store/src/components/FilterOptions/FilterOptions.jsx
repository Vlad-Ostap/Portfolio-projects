import { useSelector, useDispatch } from 'react-redux';
import { setMenFilter, setWomenFilter, setChildrenFilter, selectMenFilter, selectWomenFilter, selectChildrenFilter } from '../../redux/slices/filterSlice';
import './FilterOptions.css';

const FilterOptions = () => {
    const dispatch = useDispatch();
    const menFilter = useSelector(selectMenFilter);
    const womenFilter = useSelector(selectWomenFilter);
    const childrenFilter = useSelector(selectChildrenFilter);

    const handleMenFilterChange = () => {
        dispatch(setMenFilter());
    }

    const handleWomenFilterChange = () => {
        dispatch(setWomenFilter());
    }

    const handleChildrenFilterChange = () => {
        dispatch(setChildrenFilter());
    }

    return (
        <div className='filter__options'>
            <label className='option'>
                <input id='1' type='checkbox' checked={menFilter} onChange={handleMenFilterChange} /><span></span>men
            </label>
            <label className='option'>
                <input id='2' type='checkbox' checked={womenFilter} onChange={handleWomenFilterChange} /><span></span>women
            </label>
            <label className='option'>
                <input id='3' type='checkbox' checked={childrenFilter} onChange={handleChildrenFilterChange} /><span></span>children
            </label>
        </div>
    )
}

export default FilterOptions;