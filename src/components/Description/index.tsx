import React, { ReactNode } from 'react';

import styles from './Description.module.scss';

interface IDescriptionProps {
  label: string;
  labelWidth?: number;
  labelClassName?: string;
  size?: number;
  children: ReactNode;
}

const Description = ({
  label,
  children,
  labelClassName,
  size = 14,
  labelWidth = 150,
}: IDescriptionProps) => (
  <div className={styles.infoItem} style={{ fontSize: size }}>
    <div className={`${styles.infoLabel} ${labelClassName}`} style={{ minWidth: labelWidth }}>
      {label}:
    </div>
    <div className={styles.infoText}>{children}</div>
  </div>
);

export default Description;
