import React from "react";
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
import { useShoppingCart } from "@/context/ShopContext";
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
  const { shopItems, getItemQuantity, increaseProductQuantity } =
    useShoppingCart();

  return (
    <Container>
      {movies.map((movie, index) => {
        const quantity = getItemQuantity(movie.id);

        return (
          <GridItem key={index}>
            <Image
              alt={movie.title!}
              src={movie.image!}
              priority
              width={147}
              height={188}
            />
            <MovieTitle className={openSans.className}>
              {movie.title}
            </MovieTitle>
            <MoviePrice className={openSans.className}>
              R$ {movie.price!.toString().replace(".", ",")}
            </MoviePrice>

            <AddMovieButton
              className={openSans.className}
              type="button"
              onClick={() => {
                increaseProductQuantity(movie);
              }}
              isEnabled={shopItems[index]?.id === movie.id}
            >
              <Image
                alt="Adicionar no carrinho"
                src="/images/add_cart_icon.svg"
                priority
                width={11}
                height={11}
              />
              <MoviesAddedCounter className={openSans.className}>
                {quantity}
              </MoviesAddedCounter>
              {shopItems[index]?.id === movie.id
                ? "Item Adicionado".toUpperCase()
                : "Adicionar ao Carrinho".toUpperCase()}
            </AddMovieButton>
          </GridItem>
        );
      })}
    </Container>
  );
};

export default MovieList;
