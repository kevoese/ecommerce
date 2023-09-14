import React from 'react';

interface Props {
  children: React.ReactNode;
	className?: string;
	parentClassName?: string;
}

const ContentBox = ({ children, className, parentClassName }: Props) => (
  <div className={`w-full px-2 xsm:px-6 ${parentClassName || ''}`}>
    <div className={`w-full max-w-[1200px] mx-auto ${className || ''}`}>
      {children}
    </div>
  </div>
);

export default ContentBox;
