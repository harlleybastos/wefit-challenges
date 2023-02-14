export interface ShapeProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface ShapeMovies {
  movies: ShapeProduct[];
}
