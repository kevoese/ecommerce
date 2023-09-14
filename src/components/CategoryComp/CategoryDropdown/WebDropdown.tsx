'use client';

import React, { useCallback, useEffect } from 'react';
import { useAppSelector } from '@/store/hooks';
import { getCategorieAndAds } from '../../ThriveHome/utils';
import ArrowRight from '../../icons/ArrowRight';
import Dropdown from '../../Dropdown';

const SubCategoryBox = ({ data }: any) => (
  <div className="p-2 flex flex-col gap-6 flex-wrap overflow-y-hidden justify-start items-start content-start w-full h-[570px]">
    { data?.map((item: any, index: number) => (
      <div key={index} className="drop w-full max-w-[175px]">
        <Dropdown
          hidedropdown name={item.name}
          textClassName='font-normal text-sm text-thrive-dark'
          className=''
          alwaysOpen
        >
          <div className="flex flex-col">
            {
              item?.brands?.map((brandItem: any, brandIndex: number) => (
                <span
                  key={brandIndex}
                  className={`font-normal text-sm leading-6 text-grey-lightest-300 cursor-pointer ${brandIndex === item.brands.length - 1 ? 'mb-4' : 'mb-4'}`}>
                  {brandItem?.name}
                </span>
              ))
            }
          </div>
        </Dropdown>
      </div>
    ))}
  </div>
);

const WebDropdown = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<any>(null);
  const homeData = useAppSelector((state) => state?.home);

  const processCategoryData = useCallback(async () => {
    setSelectedCategory(homeData?.categories[0]);
  }, [homeData?.categories]);

  useEffect(() => {
    processCategoryData();
  }, [homeData, processCategoryData]);

  return (
    <div
      className='w-screen max-w-[1180px] flex h-[600px] bg-white mx-auto z-10 font-worksans'
      style={{
        width: 'calc(100vw - 48px)',
      }}
    >
      <div className="menu w-[270px] px-2 pb-6 pt-4">
        {
          homeData?.categories?.map((item: any, index: number) => (
            <div
              onClick={() => {
                setSelectedCategory(item);
              }}
              key={index}
              className={`flex justify-between items-center cursor-pointer px-4 py-2 mb-2 border rounded-md ${selectedCategory?.name === item.name ? 'border-thrive-blue' : 'border-transparent hover:border-thrive-blue-light-100'}`}
            >
              <span className="text-thrive-dark text-sm leading-6 font-medium">{item.name}</span>
              <ArrowRight />
            </div>
          ))
        }
      </div>
      <div className="flex flex-grow p-6 gap-6">
        <div className="flex-grow">
          <SubCategoryBox data={selectedCategory?.subCategories}/>
        </div>
        <div className="max-w-[245px] flex-grow w-full hidden 3md:flex flex-col gap-6">
          {
            homeData?.categoryAds?.map((item: any, index: number) => (
              <div key={index}
                className="w-full h-[245px] max-w-[245px] bg-grey-ash flex p-6 rounded-lg items-start justify-center flex-col"
                style={{
                  backgroundImage: `url(${item?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundBlendMode: 'multiply',
                }}
              >
                <span className="text-xs text-white mb-2">{item?.category}</span>
                <strong className="font-medium text-white leading-6 mb-1">{item?.info}</strong>
                <strong className="font-medium text-white leading-6 mb-1">{item.details}</strong>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  );
};

export default WebDropdown;
