import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/Logo.svg"
import { ContainerHeader } from "./styles"
import { useAuth } from "../../hooks/useAuth"
import { apiService } from "../../api/api"
import { Camera } from "phosphor-react"
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};




export function Header(){  
    const [isLogged,setIsLogged]=useState()
    const navigate = useNavigate()
    const {user,singInWhithGoogle} = useAuth()
    // const [user,setUser]=useState<any>()
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      <p>HELLO</p>
    }
    function closeModal() {
      setIsOpen(false);
    }



  
        async function Login(){
          singInWhithGoogle()
          const request = await apiService.user.conectUrl(user)
          localStorage.setItem("user",JSON.stringify(user))
          if(request.status==200){
            navigate("/feed")
          }
          
          
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


        async function createContent(){
          alert("Aqui")
        }


        useEffect(()=>{
          getUser()
        },[user])
  
  
      return(
          <ContainerHeader>
            <div>
              <div>
                <Link to="/"> 
                  <img src={logo} alt="" />
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
               
               
                
               
                  <div className="functionUser">
                  <button placeholder="Criar" onClick={openModal}><Camera size={36} /></button>
                  <button className="logout" onClick={LogOut} >Logout</button>
                  </div>
              
              </>
          }
            </div>
            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        
      </Modal>




          </ContainerHeader>
      )
  }