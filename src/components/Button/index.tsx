import React from 'react';

interface Props {
  className?: string;
  onClick?: any;
  name?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: any;
}

const Button = ({
  className, onClick, name, type, children,
}: Props) => (
  <button
    className={`bg-thrive-blue flex items-center justify-center cursor-pointer ${className || ''}`}
    onClick={onClick}
    type={type}
  >
    {children}
    <span className='text-white text-sm font-medium'>{name}</span>
  </button >
);

export default Button;
