'use client';

import React from 'react';
import EyeIcon from './EyeIcon';

interface Props {
  name: string;
  type: string;
  value: string;
  onChange: any;
  placeholder?: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  parentClassName?: string;
  onBlur?: any;
  hideBorder?: boolean;
  onKeyPress?: any;
  onFocus?: any;
}

const Input = ({
  className, label, parentClassName, error, hideBorder, ...props
}: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className={`flex-grow w-full ${parentClassName || ''}`} >
      {label
    && (
      <label className='text-thrive-dark ml-4 text-xs leading-4 mb-2 items-end block'>
        {label}
        {props?.required && <span className='text-required-red ml-1 '>*</span>}
      </label>
    )
      }
      <div className={`relative rounded-lg h-12 border ${error ? 'border-required-red' : 'border-grey-light'} w-full flex-grow flex items-center ${hideBorder ? 'border-none' : ''}`}>
        <input
          className={`rounded-lg border-none w-full flex-grow outline-none text-thrive-dark py-3 px-4 ${className || ''} placeholder:text-grey-lighter text-sm`}
          {...props}
          type={props?.type === 'password' && showPassword ? 'text' : props?.type}
        />
        {props?.type === 'password' && <div className="absolute top-0 right-4 bottom-0 flex items-center">
          <EyeIcon
            isOpen={showPassword}
            handleClick={() => setShowPassword((prev) => !prev)} />
        </div>}
      </div>

      {
        error && <span className='text-required-red ml-4 text-xs leading-4 mt-1 items-end block'>{error}</span>
      }
    </div>
  );
};

export default Input;
