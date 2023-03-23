import styled from "styled-components";

export const ContainerFooter = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  height: 12vh;
  justify-content: center;

  justify-content: center;
  background: rgb(251, 183, 119);
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.colors.background} 0%,
    rgba(254, 254, 254, 1) 100%
  );
  ul {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
  }
  @media only screen and (max-width: 500px) {
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
    height: 20vh;
    align-items: center;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    display: flex;
    margin-top: 2rem;
    flex-direction: column;
    height: 25vh;
    align-items: center;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
