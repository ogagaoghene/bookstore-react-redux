import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAPI } from '../redux/books/books';

const categories = [
  'Romance',
  'Science Fiction',
  'crime and mystery',
  'Technology',
  'Western',
  'Philosophical',
  'History'
];

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
      <h2 className="form-head">ADD BOOK</h2>
      <form onSubmit={submitBookToStore} className="Form-content">
        <input
          className="form-title"
          type="text"
          required
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle((event.target.value))}
        />
        <input
          className="form-author"
          type="text"
          required
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor((event.target.value))}
        />
        <select className="select" default name="category" value={category} onChange={(event) => setCategory((event.target.value))}>
          <option value="">
            Category
          </option>
          {categories.sort().map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
