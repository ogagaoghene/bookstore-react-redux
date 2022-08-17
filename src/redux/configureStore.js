import { combineReducers, createStore } from 'redux';
import reducer from './books/books';
import statusReducer from './categories/categories';

const initialState = {
  books: [{
    id: 1,
    title: 'React 16 Essentials',
    author: 'Artemij Fedosejev, Adam Boduch',
  }],
};

const rootReducer = combineReducers({ books: reducer, categories: statusReducer });
const store = createStore(rootReducer, initialState);

export default store;
