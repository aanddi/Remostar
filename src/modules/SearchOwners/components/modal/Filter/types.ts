interface IFormFilters {
  minPrice?: number;
  maxPrice?: number;
  minSquare?: number;
  maxSquare?: number;
  countRooms?: number;
  tags: string[];
}

export default IFormFilters;
