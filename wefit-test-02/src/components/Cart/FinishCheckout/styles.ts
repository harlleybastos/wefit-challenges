import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;

  @media only screen and (max-width: 375px) {
    max-width: 343px;
    height: 574px;
    margin-right: 16px;
    margin-left: 16px;
  }
`;

export const ButtonFinish = styled(Link)`
  width: 180px;
  height: 40px;
  background: #009edd;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
  margin: 32px 0 64px 0;
  font-weight: 700;
  color: #fff;
  font-size: 0.875rem; /* 14px */
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
