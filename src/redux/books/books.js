const ADDBOOK = 'bookStore/books/ADD_BOOK';
const REMOVEBOOK = 'bookStore/books/REMOVE_BOOK';

const beginState = [
  {
    id: 1, title: 'Taming the sate in React', author: 'Robin Weiruch', genre: 'Technology book',
  }
];

export const addBook = (payload) => ({
  type: 'ADDBOOK',
  payload,
});

export const removeBook = (payload) => ({
  type: 'REMOVEBOOK',
  payload,
});

const reducer = (state = beginState, action) => {
  switch (action.type) {
    case ADDBOOK:
      if (Array.isArray(action.payload)) {
        return [...action.payload];
      }
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
