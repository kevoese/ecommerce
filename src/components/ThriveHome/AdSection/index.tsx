import React from 'react';
import { useAppSelector } from '@/store/hooks';
import QuickOrder from './QuickOrder';
import Deals from './Deals';
import BillsComp from './BillsComp';

const AdSection = () => {
  // const data = {}
  const data = useAppSelector((state) => state?.home?.ads);

  return (
    <div className="ads relative flex w-full flex-col sm:flex-row gap-6 mt-6 pl-0 lg:pl-14">
      <QuickOrder payload ={data?.quickOrder} />
      <aside className='flex-grow overflow-x-hidden'>
        <Deals payload={data?.deals} />
        <BillsComp payload ={data?.billsProducts} />
      </aside>
    </div>
  );
};

export default AdSection;
