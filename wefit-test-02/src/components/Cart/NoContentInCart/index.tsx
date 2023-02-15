import { Open_Sans } from "@next/font/google";
import Image from "next/image";
import React from "react";
import { BackButton, Container, NoContentText } from "./styles";

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const NoContentInCart = () => {
  return (
    <Container>
      <NoContentText className={openSans.className}>
        {"Parece que não há nada por aqui :("}
      </NoContentText>
      <Image
        alt="Parece que não ha nada por aqui :("
        src="/images/woman_no_content.svg"
        priority
        width={178}
        height={264}
      />
      <Image
        alt="Border image"
        src="/images/border-bottom.svg"
        priority
        width={447}
        height={2}
        className="border-img"
      />
      <BackButton
        className={openSans.className}
        type="button"
        aria-label="Voltar"
      >
        {`Voltar`.toUpperCase()}
      </BackButton>
    </Container>
  );
};

export default NoContentInCart;
