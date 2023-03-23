import styled from "styled-components";

export const Container = styled.div`
  background-color: #ececec;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  img {
    margin-top: -10rem;
    height: 30rem;
  }

  @media only screen and (max-width: 768px) {
    h2 {
      margin-top: 2rem;
      text-align: center;
    }
    div {
      height: 50%;
      margin-inline: 0.5rem;
    }
  }
`;
export const content = styled.div`
  margin-top: -10rem;
  height: 30%;

  background: ${(props) => props.theme.colors.background};
  padding: 1rem;
  border-radius: 1rem;
`;
export const Header = styled.div`
  padding: 0.5rem;
  border-radius: 2rem 2rem 0 0;

  h2 {
    color: #851d86;
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  button {
    padding: 0.5rem;
    background-color: white;
    border: 1px solid purple;
    color: ${(props) => props.theme.colors.primary};
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.5s;
  }
  button:hover {
    border: 1px solid transparent;
    background-color: ${(props) => props.theme.colors.button};
    color: ${(props) => props.theme.colors.text};
    transition: all 0.5s;
  }
  div {
    background-color: #ececec;
    width: 18rem;
    height: 2.5rem;
    border-radius: 0.5rem;
  }
  input {
    background: transparent;
    padding: 0.3rem;
    width: 100%;
    font-size: large;
    border: 0;
    outline: 0;
    color: ${(props) => props.theme.colors.button};
  }
`;
