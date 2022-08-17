import { createStore, combineReducers } from 'redux';
import reducer from './books/books';
import statusReducer from './categories/categories';

const rootReducer = combineReducers({ reducer, statusReducer });
const store = createStore(rootReducer);

export default store;
