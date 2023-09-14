import React from 'react';

interface Props {
  sold: number;
  stock: number;
  className?: string;
}

const getPercentageOfWhatisLeft = (sold: number, stock: number) => {
  const total = sold + stock;
  const percentage = (sold / total) * 100;
  return percentage;
};

const SoldStockComp = (props: Props) => {
  const { sold, stock } = props;
  const percentage = getPercentageOfWhatisLeft(sold, stock);
  return (
    <div className={`w-full min-w-150px ${props?.className || ''}`}>
      <div className="info flex justify-between mb-1">
        <span className='text-grey-lightest-400 text-xs leading-4.5'>
          Sold: <strong className='font-medium ml-1'>{sold}</strong>
        </span>
        <span className='text-grey-lightest-400 text-xs leading-4.5'>
          In Stock: <strong className='font-medium ml-1'>{stock}</strong>
        </span>
      </div>
      <div className="track bg-grey-lightest-100 rounded-xl w-full h-2 flex">
        <div className="progress bg-thrive-dark-blue rounded-xl" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default SoldStockComp;
