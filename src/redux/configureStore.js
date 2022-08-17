import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer, { getBook } from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({ booksReducer, categoriesReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getBook());

export default store;
