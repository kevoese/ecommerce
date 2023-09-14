import React from 'react';
import ContactSection from './ContactSection';
import SearchSection from './SearchSection';
import MenuSection from './MenuSection';

type NavProps = {
	onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavProps) => (
  <div className='navbar'>
    <ContactSection />
    <SearchSection onMenuClick={onMenuClick} />
    <MenuSection />
  </div>
);

export default Navbar;
