import { useSelector } from 'react-redux';
import Book from './Book';

const List = () => {
  const bookList = useSelector((state) => state.booksReducer);
  return (
    <ul>
      {bookList.map((item) => (
        <Book title={item.title} category={item.category} author={item.author} key={item.item_id} id={item.item_id} progress={`${Math.floor(Math.random() * 100) + 1}%`} />
      ))}
    </ul>
  );
};

export default List;
