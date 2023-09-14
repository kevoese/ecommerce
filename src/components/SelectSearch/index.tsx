// import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import SelectSearchComp from 'react-select';

export const getValue = (options: { value: string}[], checkValue: string) => {
  if (!options || !checkValue) {
    return null;
  }
  const obj = options.filter((option) => option.value === checkValue);
  return obj;
};

const SelectSearch = ({
  options,
  name,
  onChange,
  value,
  placeholder,
  required,
  disabled,
}: any) => {
  // const [isClicked, setIsClicked] = useState(false);
  const handleChange = (e: any) => {
    onChange({ target: { value: e.value, name } });
  };
  const valueResult = getValue(options, value);
  // zIndex: isClicked ? '' : '2'
  return (
    <SelectSearchComp
      placeholder={placeholder}
      onChange={handleChange}
      className={'basic-single'}
      id="select-search-comp"
      styles={{
        control: (base: any) => ({
          ...base,
          border: '1px solid #D6D6D6',
          // This line disable the blue border
          boxShadow: 'none',
          height: '40px',
          // This line disable the outline border
          '&:hover': {
            boxShadow: 'none',
          },
          '&:focus': {
            boxShadow: 'none',
          },
        }),
        indicatorSeparator: (base: any) => ({
          ...base,
          display: 'none',
        }),
        singleValue: (base: any) => ({
          ...base,
          color: '#000000',
          fontSize: '14px',
          lineHeight: '24px',
          fontWeight: '400',
        }),
        option: (base: any, state) => ({
          ...base,
          color: state?.isSelected ? '#fff' : '#000000',
          backgroundColor: state?.isSelected ? '#718096ee' : '#fff',
          fontSize: '14px',
          lineHeight: '24px',
          fontWeight: '400',
          '&:hover': {
            backgroundColor: state?.isSelected ? '#718096' : '#F5F5F5',
          },
        }),
        placeholder: (base: any) => ({
          ...base,
          fontSize: '14px',
          lineHeight: '24px',
          fontWeight: '400',
        }),
      }}
      value={valueResult}
      options={options}
      required={required}
      isDisabled={disabled}
    />
  );
};

export default SelectSearch;
