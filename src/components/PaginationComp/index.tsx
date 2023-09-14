import { FunctionComponent, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PrevIcon from '../icons/PrevIcon';
import NextIcon from '../icons/NextIcon';

interface IPagination {
  count: number;
  pageSize: number;
  setPage: any;
  page: number;
}

const Prev = ({ disabled }: any) => (
  <div className='w-[40px] h-[40px] flex justify-center items-center border border-grey-lightest-100 text-grey-ash text-sm leading-6 font-medium cursor-pointer rounded-lg mx-1'>
    <PrevIcon />
  </div>
);

const Next = ({ disabled }: any) => (
  <div className='w-[40px] h-[40px] flex justify-center items-center border border-grey-lightest-100 text-grey-ash text-sm leading-6 font-medium cursor-pointer rounded-lg mx-1'>
    <NextIcon />
  </div>
);

const PaginationComp: FunctionComponent<IPagination> = ({
  count,
  setPage,
  pageSize,
  page,
}) => {
  const handlePageClick = (data: any) => {
    const { selected } = data;
    setPage(selected + 1);
  };
  const totalPages = Math.ceil(count / pageSize);
  const prevDisabled = page <= 1;
  const nextDisabled = page >= totalPages;
  const [localPage, setLocalPage] = useState(page);

  const handleChange = (e: any) => {
    const { value } = e.target;
    if (value > totalPages) {
      setLocalPage(totalPages);
    } else {
      setLocalPage(value);
    }
  };

  const handleGoToPage = () => {
    if (page !== localPage) {
      setPage(localPage < 1 || !localPage ? 1 : localPage);
    }
  };

  return (
    <div>
      <div className="pagination-comp w-full max-[330px]">
        <ReactPaginate
          previousLabel={Prev({ disabled: prevDisabled })}
          nextLabel={Next({ disabled: nextDisabled })}
          breakLabel="..."
          breakClassName="break-me"
          pageCount={totalPages}
          marginPagesDisplayed={2}
          forcePage={page - 1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName="flex"
          activeClassName="bg-thrive-blue text-white"
          pageClassName={'each-page w-[40px] h-[40px] flex justify-center items-center border border-grey-lightest-100 text-grey-ash text-sm leading-6 font-medium cursor-pointer rounded-lg mx-1'}
        />
      </div>
    </div>
  );
};

export default PaginationComp;
