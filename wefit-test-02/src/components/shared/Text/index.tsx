import React from "react";

import { Open_Sans } from "@next/font/google";
import { PropsStyle } from "./types";
import { StyledText } from "./styles";

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

type Props = PropsStyle & {
  children: React.ReactNode;
};

const Text: React.FC<Props> = ({
  fontSize,
  fontWeight,
  textTransform,
  color,
  margin,
  width,
  children,
}) => {
  return (
    <StyledText
      fontSize={fontSize}
      fontWeight={fontWeight}
      textTransform={textTransform}
      color={color}
      width={width}
      margin={margin}
      className={openSans.className}
    >
      {children}
    </StyledText>
  );
};

export default Text;
