import Image from "next/image";
import React from "react";
import { Container } from "./styles";

const Loader = () => {
  return (
    <Container>
      {" "}
      <Image
        alt="Loading..."
        src="/images/spinner_loading.png"
        priority
        width={83}
        height={83}
      />
    </Container>
  );
};

export default Loader;
