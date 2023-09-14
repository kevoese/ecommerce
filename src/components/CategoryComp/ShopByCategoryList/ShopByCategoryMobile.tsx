import React from 'react';
import SelectSearch from '../../SelectSearch';

interface Props {
  className?: string;
  onSelect?: any;
  selected: string;
  data: any;
}

const ShopByCategoryMobile = ({
  data, onSelect, selected, className,
}: Props) => (
  <div className={`w-68 ${className || ''}`}>
    <SelectSearch
      className='w-full'
      placeholder='Search categories'
      options={data?.map((item: any) => ({ value: item.name?.toLowerCase?.(), label: item.name }))}
      onChange={({ target: { value } }: any) => { onSelect(value); }}
      value={selected}
    />
  </div>
);

export default ShopByCategoryMobile;
