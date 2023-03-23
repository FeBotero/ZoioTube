import styled from "styled-components";

export const ContainerHeader = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  z-index: 1000;
  background: rgb(251, 183, 119);
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.background} 0%,
    rgba(254, 254, 254, 1) 100%
  );

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
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .logout {
    background: ${(props) => props.theme.colors.background};
    padding: 0.3rem;
    border: 1px solid red;
    border-radius: 0.5rem;
  }
  .logout:hover {
    border: 1px solid transparent;
    color: white;
    background: red;
  }
  .login {
    padding: 0.3rem;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 0.5rem;
  }
  .login:hover {
    border: 1px solid transparent;
    color: #ff824a;
    background: ${(props) => props.theme.colors.background};
  }

  .functionUser {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;
