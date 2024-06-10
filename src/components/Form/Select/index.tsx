import React, { forwardRef, useMemo } from 'react';
import { Select as UISelect, SelectProps } from 'antd';
import { IoIosArrowDown } from 'react-icons/io';
import type { BaseSelectRef } from 'rc-select';

import styles from './Select.module.scss';

interface ISelectProps extends SelectProps {
  label?: string;
  labelClassName?: string;
  isRequired?: boolean;
}

const Select = forwardRef<BaseSelectRef, ISelectProps>(({ ...restProps }, ref) => {
  const select = useMemo(
    () => (
      <UISelect
        className={`select ${styles.select}`}
        suffixIcon={<IoIosArrowDown size={15} />}
        ref={ref}
        {...restProps}
      />
    ),
    [restProps, ref],
  );

  return select;
});

export default Select;
