import { ShapeProduct } from "@/types";
import React, { createContext, useState, useCallback } from "react";

interface ShapeContext {
  handleSelectMovie: (
    movie: ShapeProduct,
    setActiveItems: React.Dispatch<React.SetStateAction<ShapeProduct[]>>
  ) => void;
  shopItems: ShapeProduct[];
}

export const ShoppingContext = createContext<ShapeContext | null>(null);

type Props = {
  children: React.ReactNode;
};

const ShoppingProvider: React.FC<Props> = ({ children }) => {
  const [shopItems, setShopItems] = useState<ShapeProduct[]>([]);

  const handleSelectMovie = useCallback(
    (
      movie: ShapeProduct,
      setActiveItems: React.Dispatch<React.SetStateAction<ShapeProduct[]>>
    ) => {
      const movieIsAlreadyOnTheList = shopItems.includes(movie);

      if (movieIsAlreadyOnTheList) {
        setShopItems((oldState) =>
          oldState.filter((item) => item.id !== movie.id)
        );

        setActiveItems((oldState) => [
          ...oldState.filter((item) => item !== movie),
        ]);
      } else {
        setShopItems([...shopItems, movie]);

        setActiveItems((oldState) => [...oldState, movie]);
      }
    },
    [shopItems]
  );

  return (
    <ShoppingContext.Provider value={{ handleSelectMovie, shopItems }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingProvider;
