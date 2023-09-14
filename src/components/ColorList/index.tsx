import React from 'react';

interface Props {
  colors: string[];
  setSelectedColor: any;
  selectedColor: string | undefined;
}

const ColorList = ({ colors, setSelectedColor, selectedColor }: Props) => (
  <div className='flex gap-4 flex-wrap justify-start'>
    {
      colors?.map?.((color, index) => (
        <div
          key={index}
          className={'w-8 h-8 rounded-full border cursor-pointer'}
          onClick={() => setSelectedColor(color)}
          style={{
            backgroundColor: color,
            borderColor: selectedColor === color ? '#1355FFAA' : '#E4EAF1',
          }}
        ></div>
      ))
    }
  </div>
);

export default ColorList;
