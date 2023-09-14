'use client';

import React from 'react';
import ArrowUp from '../icons/ArrowUp';
import ArrowDown from '../icons/ArrowDown';

interface Props {
  name: string;
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
  isActive?: boolean;
  hidedropdown?: boolean;
  alwaysOpen?: boolean;
}

const DropdownArrows = ({ isOpen }: { isOpen: boolean }) => {
  if (isOpen) {
    return <ArrowUp />;
  }
  return <ArrowDown />;
};

const Dropdown = ({
  name, children, alwaysOpen, className, textClassName, hidedropdown,
}: Props) => {
  const [open, setOpen] = React.useState(false);

  // const shouldShowChildren = !!(isActive && open);
  return (
    <div className={`w-full ${className}`}>
      <div
        onClick={() => {
          if (alwaysOpen) return;
          setOpen((prev) => !prev);
        }}
        className="flex items-center justify-between px-0 mx-2 pt-2 pb-4 rounded-md cursor-pointer">
        <span className={`${textClassName} text-sm leading-6`}>{name}</span>
        {!hidedropdown && <div className="icon"><DropdownArrows isOpen={open} /></div>}
      </div>
      {(open || alwaysOpen) && <div className="ml-6">
        {children}
      </div>}
    </div>
  );
};

export default Dropdown;
