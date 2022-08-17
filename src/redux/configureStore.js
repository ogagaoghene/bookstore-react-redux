import { combineReducers, createStore } from 'redux';
import reducer from './books/books';
import statusReducer from './categories/categories';

const initialState = {
  books: [{
    id: 1,
    title: 'Pride and Prejudice',
    author: 'Fyodor Dostoesvky',
  }],
};

const rootReducer = combineReducers({ books: reducer, categories: statusReducer });
const store = createStore(rootReducer, initialState);

export default store;
