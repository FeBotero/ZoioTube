import * as S from "./styles"
import { useState,useContext } from "react"
import { apiService } from "../../api/api"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/userContext"



export function Login(){
    const[email,setEmail]=useState<String>("")
    const[password,setPassword]=useState<String>("")
    const{setUser}:any = useContext(UserContext)

    

    interface IUser{
        email:String,
        password:String
    }
    
    const navigate = useNavigate()

    async function loginUser(event:any){
        event.preventDefault()

        const payload:IUser={
            email:email,
            password:password
        }
        
        const request = await apiService.user.conectUrl(payload)
        const data = await request.data
        

        
        if(request.status==200){
            localStorage.setItem("user",JSON.stringify(data))
            
            setUser(data.id)
            navigate("/feed")
            

        }
    }

    return(
        <S.Container>
            <img src="" alt="" />
            <S.content>
                <h2>Seja bem vindo ao seu lugar</h2>
                <S.Form>
                    <form >  
                        <div >

                        <input type="email"id="userName" placeholder=" Email" onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <div >

                        <input type="password" id="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                        </div>
                        <button onClick={loginUser}>Log in</button>
                </form>
                <p>Ainda não tem cadastro? </p>
                <Link to="/register" >Registrar</Link>
                </S.Form>
               
        
            </S.content>
        
        </S.Container>
    )


}