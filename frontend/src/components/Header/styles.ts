import styled from "styled-components";

export const ContainerHeader = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  z-index: 1000;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
  img {
    width: 7rem;
  }
  button {
    height: 1.5rem;
  }
`;
