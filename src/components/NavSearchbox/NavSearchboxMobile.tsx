'use client';

import { useState } from 'react';
import Input from '../Input';
import SearchIcon from '../icons/SearchIcon';
import CloseIcon from '../icons/CloseIcon';
import ProductSearchList from '../ProductSearchList';

type ISearchProps = {
  onClick: () => void;
  isSearchOpen: boolean;
};

const NavSearchboxMobile = ({ onClick, isSearchOpen }: ISearchProps) => {
  const [searchObj, setSearchObj] = useState<any>({
    search: '',
    category: '',
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e: {
    target: {
      name: 'search' | 'category';
      value: string;
    };
  }) => {
    if (!open) setOpen(true);
    setSearchObj({
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className='flex w-full flex-grow items-center'>
      <div className={`search-input bg-white w-full rounded-lg flex ml-5 ${!isSearchOpen ? 'invisible' : ''}`}>
        <Input
          name='search'
          type='text'
          value={searchObj?.search}
          onChange={handleChange}
          placeholder='What are you looking for?'
          className='border-none'
        />
        {open && <div className="fixed top-[56px] inset-x-0 bottom-0 bg-white rounded-lg">
          <ProductSearchList
            search={searchObj?.search || ''}
            setOpen={setOpen}
          />
        </div>}
      </div>
      <div className='ml-1 cursor-pointer' onClick={() => {
        if (open) setOpen(false);
        setSearchObj({
          search: '',
          category: '',
        });
        onClick();
      }}>
        {isSearchOpen ? <CloseIcon/> : <SearchIcon />}
      </div>
    </div>
  );
};

export default NavSearchboxMobile;
