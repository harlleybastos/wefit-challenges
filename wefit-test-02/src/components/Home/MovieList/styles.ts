import styled from "styled-components";

type Props = {
  isEnabled: boolean;
};

export const Container = styled.div`
  max-width: 960px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  margin: 0 auto;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 0.625rem; /* 10px */
  width: 309.33px;
  height: 305px;
`;

export const MovieTitle = styled.p`
  font-weight: 700;
  font-size: 0.75rem; /* 12px*/
  margin-top: 0.4375rem; /* 7px*/
`;

export const MoviePrice = styled.p`
  font-weight: 700;
  font-size: 1rem; /* 16px*/
  margin-top: 0.125rem; /* 2px */
`;

export const AddMovieButton = styled.button<Props>`
  width: 287.33px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isEnabled }) => (isEnabled ? "#039B00" : "#009EDD")};
  border-radius: 4px;
  margin-top: 8px;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 700;
  font-size: 0.75rem; /* 12px */
`;

export const MoviesAddedCounter = styled.p`
  font-size: 0.75rem; /* 12px */
  font-weight: 400;
  margin-left: 5px;
  margin-right: 12px;
`;
