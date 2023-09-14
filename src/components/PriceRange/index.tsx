import { formatCashInNaira } from '@/utils/helpers';
import React from 'react';

interface Props {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  handleChange: any;
}
const MIN_PRICE_GAP = 10000;

const calculatePriceGap = (min: number, max: number) => {
  // a 5% price gap
  const priceGap = (max - min) * 0.05;
  return priceGap > MIN_PRICE_GAP ? MIN_PRICE_GAP : priceGap;
};

const PriceRange = ({
  min, max, minValue, maxValue, handleChange,
}: Props) => {
  const [progressState, setProgressState] = React.useState({
    left: 0,
    right: 0,
  });

  const onChange = (e: any) => {
    const priceGap = calculatePriceGap(min, max);
    let value = Number(e.target.value);
    const minVal = e?.target?.name === 'minValue' ? value : Number(minValue);
    const maxVal = e?.target?.name === 'maxValue' ? value : Number(maxValue);
    if ((maxVal - minVal) < priceGap) {
      if (e.target.name === 'minValue') {
        value = Number(maxVal) - priceGap;
      } else {
        value = Number(minVal) + priceGap;
      }
    } else {
      const left = (minVal / max) * 100;
      const right = 100 - ((maxVal / max) * 100);
      setProgressState({
        left,
        right,
      });
    }
    handleChange({
      target: {
        name: e.target.name,
        value,
      },
    });
  };
  return (
    <div className='w-full'>
      <div className="priceValue flex justify-between mb-2">
        <span className="text-sm text-grey-lightest-400 leading-6">{formatCashInNaira(minValue, { removeDecimal: true })}</span>
        <span className="text-sm text-grey-lightest-400 leading-6">{formatCashInNaira(maxValue, { removeDecimal: true })}</span>
      </div>
      <div className="slider relative bg-grey-lightest-100 h-1 rounded-md">
        <div className="progress absolute h-full bg-thrive-dark-blue rounded-md"
          style={{
            left: `${progressState.left}%`,
            right: `${progressState.right}%`,
          }}
        />
      </div>
      <div className="range-input relative w-full">
        <input
          type="range"
          className="range-min absolute w-full bg-none pointer-events-none appearance-none h-1 top-[-4px]"
          min={min}
          max={max}
          name='minValue'
          value={minValue}
          step="100"
          onChange={onChange}
        />
        <input
          name="maxValue"
          type="range"
          className="range-max absolute w-full bg-none pointer-events-none appearance-none h-1 top-[-4px]"
          min={min}
          max={max}
          value={maxValue}
          step="100"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default PriceRange;
