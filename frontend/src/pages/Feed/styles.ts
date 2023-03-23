import styled from "styled-components";

export const ContainerFeed = styled.div`
  margin: 6rem 0 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    display: flex;
    gap: 0.3rem;
    align-items: center;
    cursor: pointer;
  }

  @media only screen and (max-width: 1100px) {
  }
`;
export const ContainerContent = styled.div`
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media only screen and (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
