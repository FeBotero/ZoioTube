import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/Logo.svg"
import { ContainerHeader } from "./styles"
import { useAuth } from "../../hooks/useAuth"
import { apiService } from "../../api/api"
import { Camera } from "phosphor-react"



export function Header(){  
    const [isLogged,setIsLogged]=useState()
    const navigate = useNavigate()
    const {user,singInWhithGoogle} = useAuth()
    // const [user,setUser]=useState<any>()
  
        async function Login(){
          singInWhithGoogle()
          await apiService.user.conectUrl(user)
          
          localStorage.setItem("user",JSON.stringify(user))
          navigate("/feed")
        }
        function getUser(){
          const info:any = localStorage.getItem("user")
          setIsLogged(JSON.parse(info))
          
        }

        
        function LogOut(){
          
          localStorage.removeItem("user")
          navigate("/")
          window.location.href=window.location.href
          navigate("/")
        }

        useEffect(()=>{
          getUser()
        },[user])
  
  
      return(
          <ContainerHeader>
            <div>
            <div >
  
           <Link to="/"> <img src={logo} alt="" />
          </Link>
           
            
            </div>
  
            
          {
              !isLogged
              ?
              <>
                
                <button className="login" onClick={Login} >Login</button>
                
              </>
              :
              <>
               
               
                <>
               
                  <div>
                  <button placeholder="Criar"><Camera size={32} /></button>
                  <button className="login" onClick={LogOut} >Logout</button>
                  </div>
              </>
              </>
          }
            </div>
          </ContainerHeader>
      )
  }