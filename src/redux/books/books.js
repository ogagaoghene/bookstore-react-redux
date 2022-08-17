const ADDBOOK = 'bookStore/books/ADD_BOOK';
const DELETEBOOK = 'bookStore/books/DELETE_BOOK';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appID = 'fu2GxwNDMRGqiSNEy6eo';

const startingState = [];
// Create actions

export const addBook = (payload) => ({
  type: ADDBOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: DELETEBOOK,
  payload,
});
// Implement API storage management

export const addAPI = (Book) => async (dispatch) => {
  dispatch(addBook(Book));
  await fetch(`${baseURL}/apps/${appID}/books`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: Book.item_id,
      title: Book.title,
      author: Book.author,
    }),
    headers: { 'Content-type': 'application/JSON' },
  });
};

export const getBook = () => async (dispatch) => {
  await fetch(`${baseURL}/apps/${appID}/books`)
    .then((response) => response.json())
    .then((bookList) => {
      const filteredBooks = Object.entries(bookList).map(([key, value]) => ({
        item_id: key,
        title: value[0].title,
        author: value[0].author,
      }));
      if (filteredBooks) {
        dispatch(addBook(filteredBooks));
      }
    });
};

export const removeAPI = (id) => async (dispatch) => {
  dispatch(removeBook(id));
  await fetch(`${baseURL}/apps/${appID}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });
};
// Create reducer

const booksReducer = (state = startingState, action) => {
  switch (action.type) {
    case ADDBOOK:
      if (Array.isArray(action.payload)) {
        return [...action.payload];
      }
      return [...state, action.payload];
    case DELETEBOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
