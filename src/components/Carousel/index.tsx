import React from 'react';
import { Carousel as UICarousel } from 'antd';
import { CarouselProps } from 'antd/lib';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import styles from './Carousel.module.scss';
import './Carousel.scss';

const Carousel = ({ children, ...restProps }: CarouselProps) => {
  return (
    <UICarousel
      className={`carousel ${styles.carousel}`}
      {...restProps}
      prevArrow={<GoChevronLeft />}
      nextArrow={<GoChevronRight />}
    >
      {children}
    </UICarousel>
  );
};

export default Carousel;
