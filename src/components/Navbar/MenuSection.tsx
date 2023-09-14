'use client';

import React, { useEffect } from 'react';
import ContentBox from '../ContentBox';
import LinkComponent from '../LinkComponent';
import CategoryListIcon from '../icons/CategoryListIcon';
import TruckIcon from '../icons/TruckIcon';
import UserIcon from '../icons/UserIcon';
import WebDropdown from '../CategoryComp/CategoryDropdown/WebDropdown';

const sectionBMenu = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'New Product',
    dropdown: {},
    href: '/products?page=1&new=true',
  },
  {
    name: 'Promotion',
    href: '/products?page=1&promo=true',
    Child: () => (
      <div className='w-10 h-6 flex justify-center bg-promo-orange text-white text-xs leading-6 rounded-3xl'>
				HOT
      </div>
    ),
  },
];

const sectionCMenu = [
  {
    name: 'Track Your Order',
    href: '/',
    Icon: TruckIcon,
  },
  {
    name: 'Sign In/Register',
    href: '/register',
    Icon: UserIcon,
  },
];

const MenuSection = () => {
  const [open, setOpen] = React.useState(false);

  const dropdownRef: any = React.useRef(null);
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

  return (
    <ContentBox
      parentClassName='shadow-nav-menu hidden sm:block'
      className='flex justify-between items-center py-2'
    >
      <section className='flex'>
        <div ref={dropdownRef} className="relative">
          <LinkComponent
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            name='Category'
            Icon={CategoryListIcon}
            className='w-fit 2md:w-47'
          />
          {open && <div
            className="absolute z-30 top-[48px] shadow-category-menu "
            style={{
              borderRadius: '0 0 8px 8px',
            }}
          >
            <WebDropdown />
          </div>}
        </div>
      </section>
      <section className='flex gap-5'>
        {sectionBMenu.map(({
          name, dropdown, Child, href,
        }, index) => (
          <LinkComponent
            href={href}
            name={name}
            dropdown={dropdown}
            key={index}
          >
            {Child && <Child />}
          </LinkComponent>
        ))}
      </section>
      <section className='flex gap-5'>
        {
          sectionCMenu.map(({ name, href, Icon }, index) => (
            <LinkComponent
              href={href}
              name={name}
              Icon={Icon}
              key={index}
            />
          ))
        }
      </section>
    </ContentBox>
  );
};

export default MenuSection;
