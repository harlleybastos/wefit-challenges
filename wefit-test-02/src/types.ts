export interface ShapeProduct {
  id: number;
  quantity: number;
  title: string;
  price: number;
  image: string;
}

export interface ShapeMovies {
  movies: ShapeProduct[];
}
