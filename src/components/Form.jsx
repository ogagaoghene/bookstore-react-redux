import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAPI } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: Date.now(),
      title,
      author,
      category,
    };
    dispatch(addAPI(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">ADD BOOK</h2>
      <form onSubmit={submitBookToStore}>
        <input
          className="form-book-title"
          type="text"
          required
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle((event.target.value))}
        />
        <input
          className="form-book-author"
          type="text"
          required
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor((event.target.value))}
        />
        <input
          className="form-book-category"
          type="text"
          required
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory((event.target.value))}
        />
        <button className="add-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
