import React from 'react';

import { TabsProps, Tabs as UITabs } from 'antd';

import styles from './Tabs.module.scss';
import './Tabs.scss';

interface ITabsProps extends TabsProps {
  className?: string;
}

const Tabs = ({ className, ...restProps }: ITabsProps) => (
  <UITabs className={`tabs ${styles.tabs} ${className}`} {...restProps} />
);

export default Tabs;
