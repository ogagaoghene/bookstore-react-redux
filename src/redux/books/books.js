const ADDBOOK = 'bookStore/books/ADD_BOOK';
const REMOVEBOOK = 'bookStore/books/REMOVE_BOOK';

const newBook = (action) => {
  const { title, author, genre } = action;
  return {
    title,
    author,
    genre,
  };
};

const removeBook = (state = [], action) => {
  const books = state.filter((book) => book.title !== action.title);
  return books;
};

export default function reducer(state = [], action) {
  let books = [];
  switch (action.type) {
    case ADDBOOK:
      books = [...state, newBook(action)];
      return books;
    case REMOVEBOOK:
      books = removeBook(state, action);
      return books;
    default:
      return state;
  }
}

export const addBook = ({ title, author }) => ({
  type: ADDBOOK,
  title,
  author,
});

export const deleteBook = ({ title }) => ({
  type: REMOVEBOOK,
  title,
});
