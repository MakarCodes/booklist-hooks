import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className='book-list'>
      {books.map(book => (
        <BookDetails book={book} key={book.id} />
      ))}
    </div>
  ) : (
    <div className='empty'>No books to read</div>
  );
};

export default BookList;
