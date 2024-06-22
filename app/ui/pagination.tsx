import React from 'react';
import { Pagination } from 'antd';
import { PaginateProps } from '../types';

const PaginationElement = ({
  postsPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
}: PaginateProps) => {
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      <Pagination
        current={currentPage}
        pageSize={postsPerPage}
        total={totalPosts}
        onChange={onPageChange}
      />
    </div>
  );
};

export default PaginationElement;
