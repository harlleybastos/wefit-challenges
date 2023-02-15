import Link from "next/link";
import styled from "styled-components";
import { PropsStyleButton, PropsStyleItem } from "../types";

export const MainContainer = styled.div`
  display: none;

  @media (min-width: 376px) {
    display: block;
    max-width: 950px;
    min-height: 286px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4px;
  }
`;

export const ContentContainer = styled.div`
  width: 902px;
  margin: 0 auto;
`;

export const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-left: 24px;
`;

export const ContainerImage = styled.p`
  display: flex;
`;

export const Item = styled.div<PropsStyleItem>`
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? "column" : "row")};
  justify-content: flex-start;
  align-items: ${({ isCentered }) => (isCentered ? "center" : "flex-start")};
  margin: ${({ margin }) => margin};
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  width: 62px;
  height: 26px;
`;

export const Button = styled.button<PropsStyleButton>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: ${({ margin }) => margin};
`;

export const ContainerCheckout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonCheckout = styled(Link)`
  width: 235.42px;
  height: 40px;
  background: #009edd;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
  margin: 21px 0 24px 0;
  font-weight: 700;
  color: #fff;
  font-size: 0.875rem; /* 14px */
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerTextCheckout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
