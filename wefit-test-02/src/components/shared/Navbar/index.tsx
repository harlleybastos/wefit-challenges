import React, { useMemo } from "react";

import Image from "next/image";

import {
  Container,
  ContainerList,
  List,
  Nav,
  SubTitle,
  MainTitle,
  BaseTitle,
  ShoppingCartContainer,
  ShoppingCartText,
  ShoppingCartButton,
} from "./styles";

import { Open_Sans } from "@next/font/google";
import { useShoppingCart } from "@/context/ShopContext";

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const Navbar = (): JSX.Element => {
  const { shopItems } = useShoppingCart();

  const handleRedirect = useMemo(() => {
    return shopItems.length === 0 ? "/cart/no-item-added" : "/cart";
  }, [shopItems.length]);

  return (
    <Container>
      <Nav>
        <ContainerList>
          <List isColumn={false}>
            <MainTitle className={openSans.className} href="/">
              WeMovies
            </MainTitle>
          </List>
          <ShoppingCartContainer>
            <ShoppingCartText>
              <BaseTitle className={openSans.className}>Meu Carrinho</BaseTitle>
              <SubTitle className={openSans.className}>
                {shopItems.length} itens
              </SubTitle>
            </ShoppingCartText>

            <ShoppingCartButton
              type="button"
              aria-label="Carrinho de Compras"
              href={handleRedirect}
            >
              <Image
                priority
                src="/images/shopping-cart-icon.svg"
                height={29}
                width={29}
                alt="Carrinho de Compras"
              />
            </ShoppingCartButton>
          </ShoppingCartContainer>
        </ContainerList>
      </Nav>
    </Container>
  );
};

export default Navbar;
