import '../styles/UserList/Pagination.css'
import React from 'react';
import { PaginationProps } from '../interfaces/UserListProps/PaginationProps';

const Pagination: React.FC<PaginationProps> = ({ page, setPage, maxPages }) => {

  const handlePreviousPageClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPageClick = () => {
    if (maxPages !== 0) {
      if (page < maxPages) {
        setPage(page + 1);
      }
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div className='Buttons'>
      <h3>Page {page}</h3>
      <button onClick={handlePreviousPageClick}>Previous Page</button>
      <button onClick={handleNextPageClick}>Next Page</button>
    </div>
  );
};

export default Pagination;