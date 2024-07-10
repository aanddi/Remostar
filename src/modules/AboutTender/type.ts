interface IAside {
  rooms: number;
  type: string;
  footage: number;
  budget: number;
  adress: IAdress;
  contact: {
    fullName: string;
    verify: boolean;
  };
}

interface IAdress {
  location: string;
  map: string;
}

interface IInfo {
  rooms: number;
  square: number;
  squareKitchen: number;
  squareLived: number;
  floor: string;
  finishing: string;
}

export type { IAside, IAdress, IInfo };
