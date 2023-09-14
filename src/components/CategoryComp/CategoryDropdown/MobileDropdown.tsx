import React from 'react';
import Dropdown from '../../Dropdown';

type ICategoryDropdowndata = {
  id?: string;
  name: string;
  icon?: string;
  subcategories?: {
    id?: string;
    name: string;
    brands?: {
      id?: string;
      name: string;
    }[];
  }[];
}

interface Props {
  data: ICategoryDropdowndata[]
  hidedropdown?: boolean
}

const MobileDropdown = ({ data, hidedropdown }: Props) => (
  <div className=''>
    {
      data?.map((item: any, index) => (
        <Dropdown hidedropdown={hidedropdown} key={index} name={item.name} textClassName='font-medium text-sm text-thrive-dark'>
          {
            item?.subCategories?.map((subItem: any, subIndex: number) => (
              <Dropdown hidedropdown={hidedropdown} key={subIndex} name={subItem.name} textClassName='font-normal text-sm text-thrive-dark' className=''>
                <div className="flex flex-col">
                  {

                    subItem?.brands?.map((brandItem: any, brandIndex: number) => (
                      <span
                        key={brandIndex}
                        className={`font-normal text-sm leading-6 text-grey-lightest-300 cursor-pointer ${brandIndex === subItem.brands.length - 1 ? 'mb-4' : 'mb-4'}`}>
                        {brandItem?.name}
                      </span>
                    ))
                  }
                </div>

              </Dropdown>
            ))}
        </Dropdown>
      ))}
  </div>
);

export default MobileDropdown;
