import { generateRateArray } from '@/utils/helpers';
import React from 'react';
import StarIcon from './StarIcon';

const Rating = ({ rate, reviews }: {rate?: number, reviews?: number}) => (
  <div className="flex items-end">
    <div className='gap-3 flex'>
      {
        generateRateArray(rate).map((item, index) => (
          <StarIcon key={index} type={item} />
        ))
      }
    </div>
    <span className='ml-4 text-grey-lightest-300 text-xs'>{`(${reviews || 0} rates)`}</span>
  </div>

);

export default Rating;
