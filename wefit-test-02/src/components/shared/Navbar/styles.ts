import styled from "styled-components";
import { ListProps } from "./types";

export const Container = styled.header`
  max-width: 960px;
  height: 4.625rem /* 74px */;
  margin: 0 auto;
  color: #fff;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
`;

export const ContainerList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const List = styled.li<ListProps>`
  list-style: none;
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? "column" : "row")};
`;

export const MainTitle = styled.p`
  font-size: 1.25rem /* 20px */;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-size: 0.75rem /* 12px */;
  font-weight: 600;
  color: #999;
`;

export const BaseTitle = styled.p`
  font-size: 0.875rem /* 14px */;
  font-weight: 600;
`;

export const ShoppingCartContainer = styled.div`
  display: flex;
`;

export const ShoppingCartText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ShoppingCartButton = styled.button`
  margin-left: 0.5831rem; /* 9.33px */
  background: transparent;
  border: none;
  cursor: pointer;
`;
