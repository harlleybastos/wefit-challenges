import Link from "next/link";
import styled from "styled-components";
import { PropsStyleButton, PropsStyleItem } from "../types";

export const Container = styled.div`
  display: none;

  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 343px;
    height: 716px;
    margin-left: 16px;
    margin-right: 16px;
    background: #ffffff;
    border-radius: 4px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerImage = styled.div`
  img {
    margin-left: 16px;
    margin-top: 16px;
  }
`;

export const ContainerNameAndCounter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div<PropsStyleItem>`
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? "column" : "row")};
  justify-content: flex-start;
  align-items: ${({ isCentered }) => (isCentered ? "center" : "flex-start")};
  margin: ${({ margin }) => margin};
`;

export const Button = styled.button<PropsStyleButton>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: ${({ margin }) => margin};
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  width: 59px;
  height: 26px;
`;

export const ContainerTextCheckout = styled.div`
  border-top: 1px solid #999;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 21px;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const ContainerItems = styled.div``;

export const ButtonFinish = styled(Link)`
  width: 311px;
  height: 40px;
  background: #009edd;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  font-size: 0.875rem; /* 14px */
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
