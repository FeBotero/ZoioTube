import logoGoogle from "../../assets/LogoGoogle.png"
import * as S from "./styles"


export function SignIn(){
    return(
        <S.containerSingIn>
  
        <button >
           <img src={logoGoogle} alt="Google" /> Login google
        </button>
        
        </S.containerSingIn>
    )
}