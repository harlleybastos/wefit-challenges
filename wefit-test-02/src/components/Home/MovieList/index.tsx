import React, { useContext, useState } from "react";
import Image from "next/image";

import {
  AddMovieButton,
  Container,
  GridItem,
  MoviePrice,
  MoviesAddedCounter,
  MovieTitle,
} from "./styles";

import { Open_Sans } from "@next/font/google";
import { ShoppingContext } from "@/context/ShopContext";
import { ShapeProduct } from "@/types";

type Props = {
  data: {
    movies: ShapeProduct[];
  };
};

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const MovieList: React.FC<Props> = ({ data: { movies } }) => {
  const [activeItems, setActiveItems] = useState<ShapeProduct[]>([]);

  const contextMovies = useContext(ShoppingContext);

  return (
    <Container>
      {movies.map((movie, index) => (
        <GridItem key={index}>
          <Image
            alt={movie.title}
            src={movie.image}
            priority
            width={147}
            height={188}
          />
          <MovieTitle className={openSans.className}>{movie.title}</MovieTitle>
          <MoviePrice className={openSans.className}>
            R$ {movie.price.toString().replace(".", ",")}
          </MoviePrice>

          <AddMovieButton
            className={openSans.className}
            type="button"
            onClick={() =>
              contextMovies?.handleSelectMovie(movie, setActiveItems)
            }
            isEnabled={activeItems?.includes(movie)}
          >
            <Image
              alt="Adicionar no carrinho"
              src="/images/add_cart_icon.svg"
              priority
              width={11}
              height={11}
            />
            <MoviesAddedCounter className={openSans.className}>
              {contextMovies?.shopItems.includes(movie) ? 1 : 0}
            </MoviesAddedCounter>
            {contextMovies?.shopItems.includes(movie)
              ? "Item Adicionado".toUpperCase()
              : "Adicionar ao Carrinho".toUpperCase()}
          </AddMovieButton>
        </GridItem>
      ))}
    </Container>
  );
};

export default MovieList;
