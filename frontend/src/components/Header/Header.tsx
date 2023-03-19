import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/logoGoogle.svg"


export function Header(){  
    const [selectUser,setSelectUser]=useState()
    const navigate = useNavigate()
    const [user,setUser]=useState<any>()
  
    // const { setDate } = useContext(dateContext)  
    
  
    //   const {theme,changeTheme} = useContext(ThemeContext)
  
    //   const{user,setUser}:any = useContext(UserContext)
      
  
    //   function handleChangeTheme() {
    //     changeTheme();
        
    //   }
  
    //   function handleDateChange(newDate:Date) {      
          
    //       setDate(newDate)
    //     }   
    
        function Login(){
          navigate("/login")
          window.location.href=window.location.href
        }
        
        function LogOut(){
          setUser(" ")
          localStorage.removeItem("user")
          navigate("/")
          window.location.href=window.location.href
          navigate("/")
        }
    //     function getUser(){
    //       setSelectUser(user)
    //     }
  
    //     useEffect(()=>{
    //       getUser()
    //     },[user])
  
  
      return(
          <>
            <div >
  
           <Link to="/"> <img src={logo} alt="" />
          </Link>
           
            
            </div>
  
            
          {
              !user
              ?
              <>
                
                <button className="login" onClick={Login} >Login</button>
                
              </>
              :
              <>
               
               
                <>
               
                  <div>
                  <button className="login" onClick={LogOut} >Logout</button>
                  </div>
              </>
              </>
          }
  
          </>
      )
  }