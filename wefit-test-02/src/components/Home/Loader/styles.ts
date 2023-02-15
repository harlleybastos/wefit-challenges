import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  img {
    animation: spinner 0.6s linear infinite;
  }
`;
