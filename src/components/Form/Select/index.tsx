import type { BaseSelectRef } from 'rc-select';
import React, { forwardRef, useMemo } from 'react';

import { ArrowDown } from '@common/icon';

import { SelectProps, Select as UISelect } from 'antd';

import styles from './Select.module.scss';
import './Select.scss';

interface ISelectProps extends SelectProps {
  label?: string;
  labelClassName?: string;
  isRequired?: boolean;
  className?: string;
}

const Select = forwardRef<BaseSelectRef, ISelectProps>(({ className, ...restProps }, ref) => {
  const select = useMemo(
    () => (
      <UISelect
        className={`select ${styles.select} ${className}`}
        suffixIcon={<ArrowDown size={15} />}
        ref={ref}
        {...restProps}
      />
    ),
    [className, ref, restProps],
  );

  return select;
});

export default Select;
