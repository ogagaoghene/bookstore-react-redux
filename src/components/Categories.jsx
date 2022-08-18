import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const message = useSelector((state) => state.categories);
  const dispatch = useDispatch(); 
  const check = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="categories">
      <h1>Categories list</h1>
      <button
        type="button"
        onClick={check}
      >
        Check Status
      </button>
      <h2>{message}</h2>
    </div>
  );
};

export default Categories;
