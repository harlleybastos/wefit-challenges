import Text from "@/components/shared/Text";
import { useShoppingCart } from "@/context/ShopContext";
import { Open_Sans } from "@next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  Button,
  ButtonFinish,
  Container,
  ContainerImage,
  ContainerItems,
  ContainerNameAndCounter,
  ContainerTextCheckout,
  Item,
  QuantityContainer,
} from "./styles";

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const MobileView: React.FC = () => {
  const {
    increaseProductQuantity,
    removeFromCart,
    shopItems,
    decreaseProductQuantity,
    sumOfCheckout,
    setShopItems,
  } = useShoppingCart();
  let router = useRouter();

  return (
    <Container>
      <ContainerItems>
        {shopItems?.map((movie) => (
          <Item key={movie.id} isColumn={false} isCentered>
            <ContainerImage>
              <Image
                alt={movie.title}
                src={movie.image}
                priority
                width={64}
                height={82}
              />
            </ContainerImage>

            <ContainerNameAndCounter>
              <Text
                color="#2F2E41"
                fontWeight="700"
                fontSize="14px"
                margin="0 0 23px 0"
                textTransform="initial"
              >
                {movie.title}
              </Text>

              <Item isCentered isColumn={false} margin="0 16px 0 16px">
                <Button
                  type="button"
                  margin="0 11px 0 0"
                  align="center"
                  aria-label="Remover um ingresso"
                  onClick={() => decreaseProductQuantity(movie)}
                  className={openSans.className}
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
                <QuantityContainer>{movie.quantity}</QuantityContainer>
                <Button
                  type="button"
                  margin="0 0 0 11px"
                  align="center"
                  aria-label="Adicionar um ingresso"
                  className={openSans.className}
                  onClick={() => increaseProductQuantity(movie)}
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
            </ContainerNameAndCounter>
            <Item isCentered={false} isColumn={false} margin="16px 0 0 0">
              <Text
                color="#2F2E41"
                fontWeight="700"
                fontSize="14px"
                margin="0 0 50px 0"
                textTransform="initial"
              >
                R$ {movie.price}
              </Text>
              <Item isColumn isCentered>
                <Button
                  type="button"
                  margin="0"
                  align="center"
                  className={openSans.className}
                  onClick={() => {
                    removeFromCart(movie);
                    if (shopItems.length === 1) {
                      router.push("/");
                    }
                  }}
                >
                  <Image
                    alt="Remover"
                    src="/images/delete_movie_icon.svg"
                    priority
                    width={18}
                    height={18}
                  />
                </Button>

                <Text
                  color="#999"
                  fontWeight="700"
                  fontSize="12px"
                  margin="18px 0 0 0"
                  textTransform="uppercase"
                >
                  Subtotal
                </Text>
                <Text
                  color="#2F2E41"
                  fontWeight="700"
                  fontSize="16px"
                  margin="0"
                  textTransform="uppercase"
                >
                  R$ {(movie.price * movie.quantity).toFixed(2)}
                </Text>
              </Item>
            </Item>
          </Item>
        ))}
      </ContainerItems>

      <ContainerTextCheckout>
        <Item isColumn={false} isCentered margin="0 0 20px 0">
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
        </Item>

        <ButtonFinish
          className={openSans.className}
          type="button"
          href="/"
          onClick={() => setShopItems([])}
        >
          Finalizar Pedido
        </ButtonFinish>
      </ContainerTextCheckout>
    </Container>
  );
};

export default MobileView;
