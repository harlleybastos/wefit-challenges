import styled from "styled-components";
import { PropsStyle } from "./types";

export const StyledText = styled.p<PropsStyle>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-transform: ${({ textTransform }) => textTransform};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  text-align: center;
`;
