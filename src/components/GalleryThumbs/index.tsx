import React, { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Image as ImageCustom } from '@components';

import { Image, Watermark } from 'antd';

import styles from './GalleryThumbs.module.scss';
import './GalleryThumbs.scss';

interface IGalleryProps {
  data: {
    key: number;
    src: string;
  }[];
  watermark?: boolean;
  watermarkText?: string;
  className?: string;
}

const GalleryThumbs = ({
  data,
  className,
  watermarkText = 'Ремостар',
  watermark = true,
}: IGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={`${styles.gallery} ${className}`}>
      <Swiper
        className={styles.viewGallery}
        loop
        spaceBetween={10}
        navigation
        pagination={{ type: 'fraction' }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.key} className={styles.viewGalleryItem}>
              <Image.PreviewGroup items={data}>
                {watermark ? (
                  <Watermark content={watermarkText}>
                    <ImageCustom className={styles.viewGalleryImage} src={item.src} />
                  </Watermark>
                ) : (
                  <ImageCustom className={styles.viewGalleryImage} src={item.src} />
                )}
              </Image.PreviewGroup>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        className={`galleryThumbs ${styles.galleryThumbs}`}
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={10}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          350: {
            slidesPerView: 4,
          },
          500: {
            slidesPerView: 5,
          },
          640: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 8,
          },
          1024: {
            slidesPerView: 9,
          },
          1200: {
            slidesPerView: 10,
          },
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.key}>
              <ImageCustom className={styles.galleryThumbsImage} preview={false} src={item.src} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default GalleryThumbs;
