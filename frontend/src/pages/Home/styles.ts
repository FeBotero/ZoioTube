import styled from "styled-components";

export const ContainerHome = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  h1 {
    position: absolute;
    margin-top: 8rem;
  }
  img {
    height: 80vh;
  }
  @media only screen and (max-width: 1100px) {
    img {
      height: 60vw;
    }
    h1 {
      text-align: center;
    }
  }

  @media only screen and (max-width: 750px) {
    img {
      height: 60vw;
    }
    h1 {
      font-size: large;
      margin-top: 3rem;
      background: rgb(50, 38, 255);
      background: linear-gradient(
        90deg,
        rgba(50, 38, 255, 0.6867121848739496) 0%,
        rgba(88, 238, 17, 0.7175245098039216) 28%,
        rgba(238, 32, 50, 0.8463760504201681) 75%,
        rgba(255, 239, 0, 0.6699054621848739) 100%
      );
    }
  }
`;
