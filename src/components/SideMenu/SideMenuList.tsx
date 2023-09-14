import { useAppDispatch } from '@/store/hooks';
import { setShowMobileMenu } from '@/store/modal';
import Link from 'next/link';
import React from 'react';

interface Props {
  selectedLink: string
}
const menuList: any = {
  page: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Promotion',
      link: '/products?page=1&promo=true',
    },
    {
      name: 'Featured Products',
      link: '/products?page=1',
    },
    {
      name: 'Contact',
      link: '/',
    },
    {
      name: 'Frequently Asked Questions',
      link: '',
    },
  ],
  account: [
    {
      name: 'My Account',
      link: '/',
    },
    {
      name: 'Track Your Order',
      link: '/',
    },
    {
      name: 'Sign in',
      link: '/login',
    },
    {
      name: 'Sign up',
      link: '/register',
    },
  ],
};
const SideMenuList = ({ selectedLink }: Props) => {
  const dispatch = useAppDispatch();
  const handleMenuClose = () => {
    dispatch(setShowMobileMenu(false));
  };
  return (
    <div className='py-4 px-10 w-full cursor-pointer'>
      {menuList[selectedLink]?.map(({ name, link }: any, index: number) => (
        <Link onClick={handleMenuClose} key={index} href={link} >
          <div className='flex w-full mb-4'>
            <span className='leading-6 text-thrive-dark'>{name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideMenuList;
