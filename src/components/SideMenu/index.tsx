'use client';

import React from 'react';
import { useAppSelector } from '@/store/hooks';
import ThriveLogoLarge from '../icons/ThriveLogoLarge';
import CloseIcon from '../icons/CloseIcon';
import SideMenuLinkComp from './SideMenuLinkComp';
import SideMenuList from './SideMenuList';
import MobileDropdown from '../CategoryComp/CategoryDropdown/MobileDropdown';

interface Props {
  showMenu: boolean;
  closeMenu: () => void;
}

const SideMenu = ({ showMenu, closeMenu }: Props) => {
  const [selectedLink, setSelectedLink] = React.useState('page');
  const categories = useAppSelector((state) => state?.home?.categories);

  return (
    <div className={`flex fixed top-0 left-0 right-0 bottom-0 sm:hidden overflow-hidden  z-20 ${showMenu ? 'visible' : 'invisible'}`}>
      <div className='h-screen w-full max-w-[320px] bg-white z-30' >
        <div className="flex items-center w-full justify-between py-2 px-6 bg-thrive-dark">
          <ThriveLogoLarge />
          <div onClick={closeMenu} className="close cursor-pointer">
            <CloseIcon />
          </div>
        </div>
        <SideMenuLinkComp
          selectedLink={selectedLink}
          setSelectedLink={setSelectedLink}
        />
        {selectedLink === 'category'
          ? (
            <div className='w-full max-w-[320px] mx-auto px-6'>
              <MobileDropdown data={categories} />
            </div>
          )
          : <SideMenuList selectedLink={selectedLink} />}
      </div>
      <div onClick={closeMenu} className="absolute bg-black-opaque top-0 left-0 right-0 bottom-0 cursor-pointer" />
    </div>
  );
};

export default SideMenu;
