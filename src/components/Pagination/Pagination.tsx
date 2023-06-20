import { FC } from "react";
import ReactPaginate from "react-paginate";
import CaretForward from "../../assets/caret-forward.svg";
import CaretBack from "../../assets/caret-back.svg";
import "./pagination.css";

type Props = {
  pageSize: number;
  totalCounts: number;
  handlePageChange: any;
  currentPage: number;
};

export const Pagination: FC<Props> = ({
  pageSize,
  totalCounts,
  handlePageChange,
  currentPage,
}) => {
  const pageCount = Math.ceil(totalCounts / pageSize);
  return (
      <ReactPaginate
        forcePage={currentPage - 1}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName="paginate"
        previousLabel={
          <img
            src={CaretBack}
            alt="back"
            width={20}
            height={20}
          />
        }
        nextLabel={
          <img
            src={CaretForward}
            alt="next"
            width={20}
            height={20}
          />
        }
        disabledClassName="paginate__link--disabled"
        activeClassName="paginate__link--active"
        nextLinkClassName="next-link"
        previousLinkClassName="previous-link"
      />
  );
};
