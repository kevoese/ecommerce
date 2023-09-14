/* eslint-disable no-plusplus */
export const fillOutImages = (images: string[] | undefined) => {
  if (!images?.length) return [undefined, undefined, undefined, undefined];
  // expected image length is 4
  const expectedLength = 4;
  const filledImages = [...images];
  const imagesLength = images.length;

  if (imagesLength < expectedLength) {
    for (let i = 0; i < expectedLength - imagesLength; i++) {
      filledImages?.push(images[0]);
    }
  }
  return filledImages;
};

export const formatCashInNaira = (cashInp: string | number | undefined, {
  removeDecimal = false,
} = {}) => {
  if (!cashInp) return cashInp;
  const cash = Number(cashInp);
  // add space between currency and amount
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  });

  if (removeDecimal) return formatter.format(cash).split('.')[0];

  return formatter.format(cash);
};

export const numberDigitsFormatter = (num: number | string) => {
  if (Number.isNaN(Number(num))) return num;
  const formattedNumber = num.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  return formattedNumber;
};

export const generateRateArray = (rateRaw?: number) => {
  const rate = Number(rateRaw);
  if (Number.isNaN(rate) || rate < 0 || rate > 5) return ['none', 'none', 'none', 'none', 'none'];
  const rateArray = [];
  // return half-filled for decimal values like 3.5 and filled for whole numbers like 3
  for (let i = 1; i < 6; i++) {
    if (i < rate) {
      rateArray.push('filled');
    } else if (i === Math.ceil(rate)) {
      rateArray.push('half-filled');
    } else {
      rateArray.push('none');
    }
  }
  return rateArray;
};
