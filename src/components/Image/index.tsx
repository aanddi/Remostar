import React from 'react';

import { ImageProps, Image as UIImage } from 'antd';

import './Image.scss';

interface IImageProps extends ImageProps {
  borderRadius?: number;
  className?: string;
}

const Image = ({ className, borderRadius = 10, ...restProps }: IImageProps) => (
  <UIImage style={{ borderRadius }} className={`imageWrapper ${className}`} {...restProps} />
);

export default Image;
