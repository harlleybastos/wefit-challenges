import React, {
  createContext,
  useCallback,
  useMemo,
  useContext,
  useState,
} from "react";
import { ShapeProduct } from "@/types";
import { HeaderProps } from "react-table";
import { formatCurrency } from "@/utils/formatCurrency";
import useLocalStorage from "@/hooks/useLocalStorage";

interface ShapeShoppingCartContext {
  handleAddOrRemoveMovie: (
    movie: ShapeProduct,
    setActiveItems: React.Dispatch<React.SetStateAction<ShapeProduct[]>>
  ) => void;
  increaseProductQuantity: (movie: ShapeProduct) => void;
  decreaseProductQuantity: (movie: ShapeProduct) => void;
  removeFromCart: (movie: ShapeProduct) => void;
  getItemQuantity(id: number): number;
  sumOfCheckout: string | undefined;
  shopItems: ShapeProduct[];
  setShopItems: React.Dispatch<React.SetStateAction<ShapeProduct[]>>;
}

const ShoppingCartContext = createContext({} as ShapeShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type Props = {
  children: React.ReactNode;
};

const ShoppingProvider: React.FC<Props> = ({ children }) => {
  const [shopItems, setShopItems] = useLocalStorage<ShapeProduct[]>(
    "shopping-cart",
    []
  );

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
    [setShopItems, shopItems]
  );

  function getItemQuantity(id: number) {
    return shopItems.find((item) => item.id === id)?.quantity || 0;
  }

  const increaseProductQuantity = useCallback(
    (movie: ShapeProduct) => {
      setShopItems((oldState) => {
        if (oldState.find((item) => item.id === movie.id) == null) {
          return [...oldState, { ...movie }];
        } else {
          return oldState.map((item) => {
            if (item.id === movie.id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
        }
      });
    },
    [setShopItems]
  );

  const decreaseProductQuantity = useCallback(
    (movie: ShapeProduct) => {
      setShopItems((oldState) => {
        if (oldState.find((item) => item.id === movie.id)?.quantity === 1) {
          return oldState.filter((item) => item.id !== movie.id);
        } else {
          return oldState.map((item) => {
            if (item.id === movie.id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        }
      });
    },
    [setShopItems]
  );

  const removeFromCart = useCallback(
    (movie: ShapeProduct) => {
      setShopItems((currentItems) => {
        return currentItems.filter((item) => item.id !== movie.id);
      });
    },
    [setShopItems]
  );

  const sumOfCheckout = useMemo(() => {
    if (shopItems) {
      return formatCurrency(
        shopItems.reduce((total, cartItem) => {
          const item = shopItems.find((i) => i.id === cartItem.id);
          return total + (item?.price || 0) * cartItem.quantity;
        }, 0)
      );
    }
  }, [shopItems]);

  return (
    <ShoppingCartContext.Provider
      value={{
        handleAddOrRemoveMovie: handleSelectMovie,
        shopItems,
        setShopItems,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeFromCart,
        getItemQuantity,
        sumOfCheckout,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingProvider;
