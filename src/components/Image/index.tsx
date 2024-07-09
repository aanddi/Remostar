import React from 'react';

import { ImageProps, Image as UIImage } from 'antd';

import './Image.scss';

interface IImageProps extends ImageProps {
  className?: string;
}

const Image = ({ className, ...restProps }: IImageProps) => (
  <UIImage className={`imageWrapper ${className}`} {...restProps} />
);

export default Image;
