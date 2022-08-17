import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeAPI } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(removeAPI(id));
  };

  return (
    <li className="Listing">
      <div className="header">
        <h3 className="Title">{title}</h3>
        <p className="Author">{author}</p>
        <div className="button-container">
          <button className="Comments" type="button">Comments</button>
          <button onClick={removeBook} className="Comments" type="button">Remove</button>
          <button className="Comments" type="button">Edit</button>
        </div>
      </div>
      <div className="progress" />
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
