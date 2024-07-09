interface IPortfolioCard {
  id: number;
  name: string;
  rooms: number;
  type: string;
  footage: number;
  budget: number;
  categoryRepair: string;
  time: string;
  desc: string;
  gallery: {
    key: number;
    src: string;
  }[];
  authors: {
    id: number;
    fullName: string;
    role: string;
  }[];
}

export default IPortfolioCard;
