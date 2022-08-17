import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [bookTitle, setTitle] = useState('');
  const [bookAuthor, setAuthor] = useState('');

  const dispatch = useDispatch();

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(addBook({
      title: bookTitle,
      author: bookAuthor,
    }));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">ADD BOOK</h2>
      <form onSubmit={submitForm}>
        <input
          className="book-title"
          type="text"
          required
          placeholder="Title"
          value={bookTitle}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="book-author"
          type="text"
          required
          placeholder="Author"
          value={bookAuthor}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
