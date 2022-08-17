import Book from './Book';

const List = () => {
  const books = [
    {
      id: 1, title: 'Taming the state in React', author: 'Robin Weiruch', genre: 'Technology book',
    },
  ];
  return books.map((book) => (
    <Book genre={book.genre} title={book.title} author={book.author} key={book.id} />
  ));
};

export default List;
