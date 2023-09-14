'use client';

import React from 'react';
import Link from 'next/link';
import ContentBox from '../ContentBox';
import ThriveLogoLarge from '../icons/ThriveLogoLarge';
import NavSearchbox from '../NavSearchbox';
import HamburgerIcon from '../icons/HamburgerIcon';

type SearchSectionProps = {
	onMenuClick: () => void;
}

const SearchSection = ({ onMenuClick }: SearchSectionProps) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const handleSearchClickMobile = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <ContentBox parentClassName='bg-thrive-dark sm:bg-black px-2 xsm:px-5 relative z-40' className='flex items-center py-1 sm:py-6'>
      <div className={`logo mr-2 sm:mr-4 flex items-center ${isSearchOpen ? 'hidden sm:block' : ''}`}>
        <div onClick={onMenuClick} className="hamburger cursor-pointer sm:hidden mr-6">
          <HamburgerIcon />
        </div>
        <Link href='/'><ThriveLogoLarge /></Link>
      </div>
      <NavSearchbox
        onClick={handleSearchClickMobile}
        isSearchOpen={isSearchOpen}
      />
    </ContentBox>
  );
};

export default SearchSection;
