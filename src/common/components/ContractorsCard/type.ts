interface IContractorCard {
  id: number;
  name: string;
  verify: boolean;
  city: string;
  contartorType: string;
  desc: string;
  reviews: { starCount: number; commentCount: number };
  tags: {
    id: number;
    name: string;
  }[];
  services: {
    list: {
      id: number;
      name: string;
      salary: number;
    }[];
    count: number;
  };
}

interface IContractorCardProps {
  contractor?: IContractorCard;
}

export default IContractorCardProps;
