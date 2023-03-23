import logoHome from "../../../public/home.svg";
import { ContainerHome } from "./styles";

export function Home() {
  return (
    <ContainerHome>
      <h1>Conheça uma comunidade que tem prazer fazer conexão</h1>
      <img src={logoHome} alt="" />
    </ContainerHome>
  );
}
