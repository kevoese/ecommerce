import React from 'react';
import CheckIcon from './CheckIcon';

type Props = {
  id?: string;
  children?: any;
  name: string;
  onClick?: (arg?: any) => void;
  onChange?: (arg?: any) => void;
  value: boolean;
  disabled?: boolean;
  backgroundColor?:string;
  iconColor?:string;
  height?:string;
  className?: string;
  text?:string;
};
const CheckboxText = ({
  id,
  children,
  name,
  onClick,
  onChange,
  value,
  disabled,
  backgroundColor,
  iconColor,
  className,
  text,
}: Props) => (
  <div className={`flex relative  ${className || ''}`}>
    <input
      id={id}
      name={name}
      checked={value}
      onChange={(e) => onChange?.({
        target: {
          name,
          value: e.target.checked,
        },
      })}
      type="checkbox"
      disabled={disabled}
      className='hidden'
    />
    <label className={`flex items-center justify-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => onClick?.()} htmlFor={id}>
      <div className="flex items-center justify-center h-5 w-5 min-h-[20px] min-w-[20px] border-2  border-grey-lightest-300 rounded-sm" style={{ backgroundColor }}>
        <div className={`${value ? 'flex items-center justify-center' : 'hidden'} `}>
          <CheckIcon color={iconColor} />
        </div>
      </div>
      {text && <span className='text-sm leading-6 ml-3'>{text}</span>}
      {children}
    </label>
  </div>
);

export default CheckboxText;
