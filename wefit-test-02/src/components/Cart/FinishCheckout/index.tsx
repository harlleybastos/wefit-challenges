import React from "react";

import Text from "@/components/shared/Text";
import Image from "next/image";

import { ButtonFinish, Container } from "./styles";
import { Open_Sans } from "@next/font/google";
import { useShoppingCart } from "@/context/ShopContext";

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const FinishCheckout = () => {
  const { setShopItems } = useShoppingCart();
  return (
    <Container>
      <Text
        color="#2F2E41"
        fontSize="20px"
        fontWeight="700"
        margin="64px 0 32px 0"
        textTransform="initial"
      >
        Compra realizada com sucesso!
      </Text>
      <Image
        alt="Compra finalizada com sucesso"
        src="/images/finish_buy.svg"
        priority
        width={294}
        height={307}
      />
      <ButtonFinish
        className={openSans.className}
        href="/"
        type="button"
        onClick={() => setShopItems([])}
      >
        Voltar
      </ButtonFinish>
    </Container>
  );
};

export default FinishCheckout;
