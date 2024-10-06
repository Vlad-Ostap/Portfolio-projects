import { useDispatch, useSelector } from 'react-redux'
import { setTitleFilter, setAuthorFilter, setOnlyFavoriteFilter,  selectTitleFilter, 
    selectAuthorFilter, selectOnlyFavoriteFilter, resetFilters } from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
    const dispatch = useDispatch()
    const title = useSelector(selectTitleFilter)
    const author = useSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value))
    }

    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value))
    }

    const handleOnlyFavoriteFilter = () => {
        dispatch(setOnlyFavoriteFilter())
    }

    const handleResetFilter = () => {
        dispatch(resetFilters())
    }

    return (
        <div className="app-block filter">
            <div className='filter-row'>
                <div className='filter-group'>
                    <input type='text' placeholder='filter by title...' value={title} onChange={(e) => handleTitleFilterChange(e)}></input>
                </div>
                <div className='filter-group'>
                    <input type='text' placeholder='filter by author...' value={author} onChange={(e) => handleAuthorFilterChange(e)}></input>
                </div>
                <div className='filter-group'>
                    <label>
                        <input type='checkbox' checked={onlyFavoriteFilter} onChange={handleOnlyFavoriteFilter}/>
                    </label>
                    Only favorite
                </div>
                <button type='button' className='filter button' onClick={handleResetFilter}>Reset Filters</button>
            </div>
        </div>
    )
}

export default Filter;