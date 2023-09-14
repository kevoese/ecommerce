import Link from 'next/link';
import React from 'react';
import DropdownIcon from '../icons/DropdownIcon';

type LinkComponentProps = {
  href?: string;
  name: string;
  Icon?: any;
  className?: string;
  dropdown?: any;
  children?: any;
  onClick?: any;
};
const BaseComp = ({
  className, Icon, name, dropdown, children, onClick,
}: LinkComponentProps) => (
  <div onClick={onClick} className={`flex cursor-pointer py-2 ${className || ''}`}>
    {Icon && <Icon />}
    <span className={`flex-grow px-3 text-sm leading-6 ${Icon ? 'hidden 2md:flex' : ''}`}>{name}</span>
    {children}
    {dropdown && <div className={`dropdown ${Icon ? 'hidden 2md:flex' : ''}`}><DropdownIcon /></div>}
  </div>
);

const LinkComponent = ({
  href,
  ...props
}: LinkComponentProps) => {
  if (!href) {
    return (
      <BaseComp {...props} />
    );
  }
  return (
    <Link href={href}>
      <BaseComp {...props} />
    </Link>
  );
};

export default LinkComponent;
