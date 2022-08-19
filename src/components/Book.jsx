import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeAPI } from '../redux/books/books';

const Book = (props) => {
  const {
    title, author, id, progress, category,
  } = props;
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(removeAPI(id));
  };

  return (
    <li className="listing">
      <div className="header">
        <span className="category">{category}</span>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <div className="button-container">
          <button className="button" type="button">Comments</button>
          <button onClick={removeBook} className="button" type="button">Remove</button>
          <button className="button" type="button">Edit</button>
        </div>
      </div>
      <div className="book-data">
        <div className="book-progress">
          <div className="book-progress-bar">
            <div className="inner" />
            <div className="circle">
              <div className="bar left">
                <div className="progress" />
              </div>
              <div className="bar right">
                <div className="progress" />
              </div>
            </div>
          </div>
          <div className="progress-value">
            <h3 className="progress-number">{progress}</h3>
            <p className="book-completed">Completed</p>
          </div>
        </div>
        <div className="chapters">
          <span className="current">CURRENT CHAPTER</span>
          <span className="chapter-progress">
            Chapter-
            {progress}
          </span>
          <button className="chapter-update" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
      <div className="progress" />
    </li>
  );
};

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Book;
