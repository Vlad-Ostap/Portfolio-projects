import { useSelector, useDispatch } from 'react-redux';
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
import { deleteBook, toggleFavorite, selectBooks } from '../../redux/slices/booksSlice';
import { selectTitleFilter, selectAuthorFilter, selectOnlyFavoriteFilter } from '../../redux/slices/filterSlice';
import './BookList.css';

const BookList = () => {
    const books = useSelector(selectBooks);
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);
    const dispatch = useDispatch();

    const handleDeleteBook = (bookId) => {
        dispatch(deleteBook(bookId));
    };

    const handleToogleBook = (bookId) => {
        dispatch(toggleFavorite(bookId));
    };

    const filteredBook = books.filter((book) => {
        const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase());
        const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase());
        const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;
        return matchesTitle && matchesAuthor && matchesFavorite;
    });

    const highlightMatch = (text, filter) => {
        const regex = new RegExp(`(${filter})`, 'gi');

        return text.split(regex).map((substring, i) => {
            if (substring.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={i} className='highlight'>
                        {substring}
                    </span>
                )
            }
            return substring
        });
    };

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {filteredBook.length === 0 ? (<p>No books avialable</p>)
                : (<ul>
                    {filteredBook.map((book, index) =>
                        <li key={book.id}>
                            <div className='book-info'>{++index}. {highlightMatch(book.title, titleFilter)} 
                            {' by'} <strong>{highlightMatch(book.author, authorFilter)}</strong> ({book.source})
                            </div>
                            <div className='book-actions'>
                                <span onClick={() => { handleToogleBook(book.id) }}>
                                    {book.isFavorite ? (<BsBookmarkStarFill className='star-icon' />)
                                        : (<BsBookmarkStar className='star-icon' />)}
                                </span>
                                <button className='book-actions' onClick={() => handleDeleteBook(book.id)}>Delete</button>
                            </div>
                        </li>
                    )}
                </ul>)}
        </div>
    )
}

export default BookList;