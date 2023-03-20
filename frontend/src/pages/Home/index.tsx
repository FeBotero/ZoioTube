import logoHome from "../../../public/home.svg"
import { ContainerHome } from "./styles"

export function Home(){
    return(
        <ContainerHome>
            Conheça uma comunidade que tem prazer fazer conexão
            <img src={logoHome} alt="" />


        </ContainerHome>
    )
}