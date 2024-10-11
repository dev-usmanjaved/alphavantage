import React from "react";
import ReactPaginate from "react-paginate";
import {
  MARGIN_PAGES,
  PAGE_RANGE,
  NEXT,
  PREV,
  BREAK_LABEL,
} from "../../../constants";
import {
  paginationContainerClass,
  paginationItemClass,
  paginationActiveClass,
  paginationDisabledClass,
} from "./ClassNames";
import { PaginationProps } from "../../../types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageClick = (data: { selected: number }) => {
    onPageChange(data.selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel={PREV}
      nextLabel={NEXT}
      breakLabel={BREAK_LABEL}
      pageCount={totalPages}
      marginPagesDisplayed={MARGIN_PAGES}
      pageRangeDisplayed={PAGE_RANGE}
      onPageChange={handlePageClick}
      containerClassName={paginationContainerClass}
      activeClassName={paginationActiveClass}
      pageClassName={paginationItemClass}
      previousClassName={paginationItemClass}
      nextClassName={paginationItemClass}
      disabledClassName={paginationDisabledClass}
    />
  );
};

export default Pagination;
