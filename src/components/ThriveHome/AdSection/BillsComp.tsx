import React from 'react';

interface Props {
  payload: any
}

const BillsComp = ({ payload }: Props) => (
  <div className='w-full overflow-x-scroll flex flex-nowrap gap-6 pb-4 pr-6 pl-6 sm:pl-0 h-[172px]'>
    {payload?.map(({
      title, info, details, image,
    }: any, index: any) => (
      <div
        key={index}
        className="rounded-lg bg-grey-lightest-300 min-w-[270px] p-6 flex flex-col justify-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'multiply',
        }}
      >
        <small className="text-white font-normal leading-4 text-xs mb-2">{title}</small>
        <span className="text-white font-medium leading-6 mb-1">{info}</span>
        <span className="text-white font-medium leading-6 whitespace-nowrap text-ellipsis overflow-x-hidden">{details}</span>
      </div>
    ))}
  </div>
);

export default BillsComp;
