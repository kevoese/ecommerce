import React from 'react';

interface Props {
  className: string;
  src?: string;
}

const DivImage = ({ src, className }: Props) => {
  const styleObj = src ? {
    style: {
      backgroundImage: `url(${src})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      // no-repeat
    },
  } : {};
  return (
    <div
      {...styleObj}
      className={className}
    />
  );
};

export default DivImage;
