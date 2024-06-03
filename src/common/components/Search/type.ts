interface ISearchProps {
  title: string;
  onSearch: (data: ISearch) => void;
  onSearchCategories?: (categorie: string) => void;
  onOpenFilter?: () => void;
  categories?: ICategories[];
}

interface ISearch {
  searchField: string;
}

interface ICategories {
  id: number;
  name: string;
  count?: number;
}

export type { ISearchProps, ICategories, ISearch };
