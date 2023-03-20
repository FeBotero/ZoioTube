import styled from "styled-components";

export const ContainerFooter = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  height: 10vh;

  justify-content: center;
  background: #ccc;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    li {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }
  }
`;
