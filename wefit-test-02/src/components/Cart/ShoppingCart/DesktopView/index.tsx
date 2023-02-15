import React, { useMemo } from "react";

import Image from "next/image";

import Text from "@/components/shared/Text";

import { useShoppingCart } from "@/context/ShopContext";

import { HeaderProps } from "react-table";
import { Table } from "../../Table";

import {
  Button,
  ButtonCheckout,
  MainContainer,
  ContainerCheckout,
  ContainerTextCheckout,
  Item,
  QuantityContainer,
  ContentContainer,
} from "./styles";

import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const DesktopView = () => {
  const {
    increaseProductQuantity,
    removeFromCart,
    shopItems,
    sumOfCheckout,
    decreaseProductQuantity,
  } = useShoppingCart();

  const columns = useMemo(
    () => [
      {
        Header: "Produtos".toUpperCase(),
        Cell: ({ row }: React.PropsWithChildren<HeaderProps<object>>) => (
          <Item isColumn={false} isCentered={false}>
            <Image
              alt="Adicionar no carrinho"
              src={row.original.image}
              priority
              width={89}
              height={114}
            />
            <Item isColumn margin="0 0 0 52px" isCentered={false}>
              <Text
                color="black"
                fontSize="14px"
                fontWeight="700"
                textTransform="uppercase"
                margin="0"
              >
                {row.original.title}
              </Text>
              <Text
                color="black"
                fontSize="14px"
                fontWeight="700"
                textTransform="uppercase"
                margin="0"
              >
                R$ {row.original.price}
              </Text>
            </Item>
          </Item>
        ),
      },
      {
        Header: "Qtd".toUpperCase(),
        Cell: ({ row }: React.PropsWithChildren<HeaderProps<object>>) => {
          return (
            <Item isColumn={false} isCentered>
              <Button
                type="button"
                margin="0 11px 0 0"
                align="center"
                aria-label="Remover um ingresso"
                onClick={() => decreaseProductQuantity(row.original)}
              >
                <Image
                  alt="Remover"
                  src="/images/remove_button.svg"
                  placeholder="blur"
                  blurDataURL="/images/remove_button.svg"
                  width={18}
                  height={18}
                />
              </Button>
              <QuantityContainer>
                {shopItems[row.index].quantity}
              </QuantityContainer>
              <Button
                type="button"
                margin="0 0 0 11px"
                align="center"
                aria-label="Adicionar um ingresso"
                onClick={() => increaseProductQuantity(row.original)}
              >
                <Image
                  alt="Adicionar"
                  src="/images/add_more_button.svg"
                  placeholder="blur"
                  blurDataURL="/images/add_more_button.svg"
                  width={18}
                  height={18}
                />
              </Button>
            </Item>
          );
        },
      },
      {
        Header: "Subtotal".toUpperCase(),
        Cell: ({ row }: React.PropsWithChildren<HeaderProps<object>>) => (
          <Item isColumn isCentered={false}>
            <Text
              color="#2F2E41"
              fontSize="16px"
              fontWeight="700"
              textTransform="uppercase"
              margin="0"
            >
              R${" "}
              {(row.original.price * shopItems[row.index].quantity).toFixed(2)}
            </Text>
          </Item>
        ),
      },
      {
        Header: " ",
        Cell: ({ row }: React.PropsWithChildren<HeaderProps<object>>) => (
          <Item isColumn isCentered>
            <Button
              type="button"
              margin="0"
              align="flex-end"
              onClick={() => removeFromCart(row)}
            >
              <Image
                alt="Remover"
                src="/images/delete_movie_icon.svg"
                priority
                width={18}
                height={18}
              />
            </Button>
          </Item>
        ),
      },
    ],
    [
      decreaseProductQuantity,
      increaseProductQuantity,
      removeFromCart,
      shopItems,
    ]
  );

  return (
    <MainContainer>
      <ContentContainer>
        <Table columns={columns} data={shopItems || []} />
        <ContainerCheckout>
          <ButtonCheckout
            className={openSans.className}
            type="button"
            href="/cart/finish"
          >
            Finalizar Pedido
          </ButtonCheckout>
          <ContainerTextCheckout>
            <Text
              color="#999"
              fontSize="14px"
              fontWeight="700"
              textTransform="uppercase"
              margin="0 5px 0 0"
            >
              Total
            </Text>
            <Text
              color="#2F2E41"
              fontSize="24px"
              fontWeight="700"
              textTransform="uppercase"
              margin="0"
              width="130.79px"
            >
              {sumOfCheckout}
            </Text>
          </ContainerTextCheckout>
        </ContainerCheckout>
      </ContentContainer>
    </MainContainer>
  );
};

export default DesktopView;
