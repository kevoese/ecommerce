/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useAppSelector } from '@/store/hooks';
import Button from '../../Button';
import PlayIcon from '../../icons/PlayIcon';
import SaveWishlistIcon from '../../icons/SaveWishlistIcon';

const Indicator = (onClickHandler: any, isSelected: boolean) => (
  <div
    onClick={onClickHandler}
    className={`inline-flex  h-[6px] mr-1 cursor-pointer rounded-3xl bg-white ${isSelected ? 'w-6' : 'w-[6px]'}`}
  />
);
const MovieTicketSection = () => {
  const movies = useAppSelector((state) => state.product.featuredMovies);
  return (
    <div className="my-16">
      <Carousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={600}
        showArrows={false}
        showIndicators
        animationHandler="fade"
        swipeable={false}
        renderIndicator={Indicator}
      >
        { movies?.map?.(({ title, image, date }, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image || 'https://publicpayfiimages.s3.amazonaws.com/banner/adamproject.png'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              // dark overlay
              backgroundBlendMode: 'multiply',
            }}
            className='h-[560px] w-full bg-grey-lightest-200 hover:bg-grey-lightest-300 flex flex-col justify-center items-center xsm:items-start pl-[24px] md:pl-[64px] lg:pl-[100px]'
          >
            <div className="tag h-9 w-[74px] bg-grey-opaque flex items-center justify-center mb-6">
              <span className='font-inter font-medium text-xs text-grey-lightest-90'>Movie</span>
            </div>
            <h4 className='font-inter font-bold text-3xl leading-10 text-grey-lightest-90 mb-2'>{title}</h4>
            <small className='font-inter font-medium text-sm leading-6 text-grey-lightest-350 mb-12'>{`On ${date}`}</small>
            <div className="flex flex-col mx-auto xsm:mx-0 xsm:flex-row">
              <Button name='Get Ticket' className='rounded-3xl w-[161px] h-14'>
                <div className="mr-2">
                  <PlayIcon />
                </div>
              </Button>
              <div className="flex items-center mt-6 ml-3 xsm:ml-8 xsm:mt-0 cursor-pointer">
                <SaveWishlistIcon />
                <span className='font-inter font-medium text-sm leading-6 text-grey-lightest-90 ml-3'>Add Watchlist</span>
              </div>
            </div>
          </div>))
        }
      </Carousel>
    </div>
  );
};
export default MovieTicketSection;
