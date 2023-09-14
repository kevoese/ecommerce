import React from 'react';
import SkeletonLoader from 'react-loading-skeleton';

const Skeleton = () => (
  <div className='absolute top-0 left-0 right-0 bottom-0'><SkeletonLoader width="100%" height="100%" /></div>
);

export default Skeleton;
