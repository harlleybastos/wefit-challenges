import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 960px;
  height: 532.8px;
  background-color: #fff;
  margin: 0 auto;

  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 343px;
    height: 100%;
    margin-left: 16px;
    margin-right: 16px;
    background: #ffffff;
    border-radius: 4px;

    .border-img {
      width: 100%;
    }
  }
`;

export const NoContentText = styled.h1`
  margin-top: 64px;
  width: 200px;
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  margin-bottom: 32px;
  text-align: center;
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 40px;
  background-color: #009edd;
  margin-top: 32px;
  border: none;
  color: #fff;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.875rem; /* 14px  */
  cursor: pointer;

  @media only screen and (max-width: 375px) {
    margin-bottom: 64px;
  }
`;
