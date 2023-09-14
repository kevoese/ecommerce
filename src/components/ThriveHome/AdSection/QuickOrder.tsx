import React from 'react';
import Button from '../../Button';

interface Props {
  payload: any
}

const QuickOrder = ({ payload }: Props) => (
  <aside className='w-full sm:w-[21%] min-w-[300px] min-h-[270px] flex justify-end sm:pb-4 px-6 sm:px-0'>
    <div className="order-card min-w-[270px] w-full sm:w-auto bg-grey-ash py-12 flex flex-col justify-between items-center rounded-lg"
      style={{
        backgroundImage: `url(${payload?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="flex flex-col items-center">
        <small className="text-white font-normal leading-4 text-xs mb-2">{payload?.brand}</small>
        <span className="text-white font-medium leading-7 mb-1 text-xl">{payload?.category}</span>
        <span className="text-white font-medium leading-7 text-xl">{payload?.campaign}</span>
      </div>
      <Button name='Order Now' className='h-10 w-28 rounded-lg' />
    </div>
  </aside>
);

export default QuickOrder;
