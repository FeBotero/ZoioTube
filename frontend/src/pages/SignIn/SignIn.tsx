import logoGoogle from "../../assets/LogoGoogle.png"
import * as S from "./styles"
import { useAuth } from "../../hooks/useAuth"

export function SignIn(){
    const {user,singInWhithGoogle} = useAuth()

    console.log(user)
    return(
        <S.containerSingIn>
  
        <button onClick={singInWhithGoogle}>
           <img src={logoGoogle} alt="Google" /> Login google
        </button>
        
        </S.containerSingIn>
    )
}