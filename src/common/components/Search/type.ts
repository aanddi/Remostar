interface ISearchProps {
  title: string;
  totalCountFilter?: number;
  onSearch: (data: ISearch) => void;
  onOpenFilter?: () => void;
}

interface ISearch {
  searchField: string;
  searchCity: string;
}

export type { ISearchProps, ISearch };
