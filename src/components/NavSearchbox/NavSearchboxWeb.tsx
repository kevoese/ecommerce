'use client';

import { useEffect, useRef, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import CategoryDropdown from '../CategoryComp/CategoryDropdown';
import ProductSearchList from '../ProductSearchList';

const NavSearchboxWeb = () => {
  const [searchObj, setSearchObj] = useState<any>({
    search: '',
    category: '',
  });

  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

  const handleChange = (e: {
    target: {
      name: 'search' | 'category';
      value: string;
    };
  }) => {
    setSearchObj({
      [e.target.name]: e.target.value,
    });
  };

  const [open, setOpen] = useState(false);

  const dropdownRef: any = useRef(null);
  const handleDropdown = (e: any) => {
    if (dropdownRef?.current?.contains?.(e.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleDropdown);
    return () => {
      window.removeEventListener('click', handleDropdown);
    };
  }, []);

  const handleSearch = () => {
    if (!open) setOpen(true);
    setSearchValue(searchObj?.search);
  };

  return (
    <div ref={dropdownRef} className='flex w-full flex-grow'>
      <div className="search-input bg-white w-full min-w-[420px] max-w-xl rounded-lg flex">
        <div className='w-full relative'>
          <Input
            name='search'
            type='text'
            value={searchObj?.search}
            onChange={handleChange}
            placeholder='What are you looking for?'
            parentClassName='border-none relative z-10'
            onKeyPress={(e: any) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          {open && <div className="absolute pt-[56px] top-0 inset-x-0 bg-white rounded-lg">
            <ProductSearchList
              search={searchValue || ''}
              setOpen={setOpen}
              className='shadow-search-result'
            />
          </div>}
        </div>

        <CategoryDropdown />
      </div>
      <Button
        name='Search'
        className='h-12 w-24 ml-2 rounded-lg'
        onClick={handleSearch}
      />
    </div>
  );
};

export default NavSearchboxWeb;
