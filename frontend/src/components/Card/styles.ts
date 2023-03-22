import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  cursor: pointer;

  .videoPreview {
    height: 8rem;
    width: 18rem;
    border-radius: 0.5rem;
    object-fit: cover;
    object-position: center;
  }
  .imgAuthor {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  .contentAuthor {
    display: flex;
    gap: 1rem;
    padding: 1rem;
  }
  .infoUser {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h3 {
  }
`;
