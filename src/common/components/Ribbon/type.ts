import { DefaultOptionType } from 'antd/es/select';
import { ReactNode } from 'react';

interface IribbonProps {
  children: ReactNode;
  listCount: number;
  classNameList?: string;
  pagination?: boolean;
  totalPage?: number;
  sortOptions?: DefaultOptionType[];
  onSort?: (value: string) => void;
}

export default IribbonProps;
