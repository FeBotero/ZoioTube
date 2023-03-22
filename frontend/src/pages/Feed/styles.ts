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
`;
export const ContainerContent = styled.div`
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;
