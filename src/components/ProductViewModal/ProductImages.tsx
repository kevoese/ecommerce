'use client';

import React, { useEffect } from 'react';
import { fillOutImages } from '@/utils/helpers';
import DivImage from './DivImage';

interface Props {
  images?: string[];
}

const ProductImages = ({
  images: imagesRaw,
}: Props) => {
  const images = fillOutImages(imagesRaw);
  const [
    selectedImage,
    setSelectedImage,
  ] = React.useState<{ image: string | undefined, index: number}>({
    image: undefined,
    index: 0,
  });

  useEffect(() => {
    if (imagesRaw?.length) {
      const result = fillOutImages(imagesRaw);
      setSelectedImage({
        image: result?.[0],
        index: 0,
      });
    }
  }, [imagesRaw]);
  return (
    <div className="image-view w-full sm:w-[368px]">
      <DivImage
        src={selectedImage?.image}
        className='w-full h-[368px] rounded-lg bg-grey-lightest-100 mb-3 border border-grey-lightest-200 bg-cover'
      />
      <div className="flex justify-start sm:justify-between gap-[6px] flex-wrap">
        {
          images?.map((image, index) => (
            <div key={index} onClick={() => {
              if (!image) return;
              setSelectedImage({
                image,
                index,
              });
            }}
            className={`rounded-lg cursor-pointer border ${selectedImage?.index === index ? 'border-thrive-blue' : 'border-grey-lightest-200'}`}
            >
              <DivImage
                src={image}
                className='w-[83px] h-[83px] rounded-lg bg-grey-lightest-100 bg-cover'
              /></div>
          ))
        }
      </div>
    </div>
  );
};

export default ProductImages;
