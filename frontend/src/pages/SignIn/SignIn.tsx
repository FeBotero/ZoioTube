import logoGoogle from "../../assets/LogoGoogle.png"
import * as S from "./styles"
import { useAuth } from "../../hooks/useAuth"
import { apiService } from "../../api/api"

export function SignIn(){
    const {user,singInWhithGoogle} = useAuth()

    function loginUser(){
        singInWhithGoogle()
        apiService.user.conectUrl(user)
        
    }


    
    return(
        <S.containerSingIn>
  
        <button onClick={loginUser}>
           <img src={logoGoogle} alt="Google" /> Login google
        </button>
        
        </S.containerSingIn>
    )
}