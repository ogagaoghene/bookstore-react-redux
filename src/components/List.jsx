import { useSelector } from 'react-redux';
import Book from './Book';

const List = () => {
  const bookList = useSelector((state) => state.booksReducer);
  return (
    <ul>
      {bookList.map((item) => (
        <Book title={item.title} key={item.item_id} id={item.item_id} />
      ))}
    </ul>
  );
};

export default List;
