import { ChangeEvent, useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/Logo.svg"
import { ContainerHeader } from "./styles"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { apiService } from "../../api/api"
import { Camera } from "phosphor-react"
import Modal from 'react-modal';
import axios from "axios"



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
}

export function Header(){  
    const [isLogged,setIsLogged]=useState()
    const navigate = useNavigate()
    
    const [modalIsOpen, setIsOpen] = useState(false);
    const [user,setUser]=useState<any>()
    
    const [title,setTitle]=useState<any>()
    const [content,setContent]=useState<any>()
    const [image,setImage]=useState<any>()
    const [videoUrl,setVideoURL]=useState('')
    
    const payload = {
      author:user?.email,
      title:title,
      content:content,
      image:image,
      createdAt:JSON.stringify(new Date())
    }

    console.log(isLogged)
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
    async function handleImageUpload(event:ChangeEvent<HTMLInputElement>){
      const file = event.target.files![0]
      
      const data = new FormData()
      data.append('file',file)
      data.append("upload_preset","ZoioTube")

      axios.post('https://api.cloudinary.com/v1_1/dmd5jzmg0/video/upload', data)
        .then(response=>{
          const imageUrl = response.data.secure_url
          setImage(imageUrl)
        })

    }
    
    async function Login(){
      navigate("/login")
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
    function createPost(){
      apiService.post.createURL(payload)
      closeModal()
      setImage("")
      
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
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create Content"
      >

        
        <button onClick={closeModal}>close</button>
        <div>
          <input type="text" name="title" id="title" placeholder="Titúlo" onChange={e=>setTitle(e.target.value)}/>  
          <input 
          type="file"
          name="fileUpload" 
          onChange={handleImageUpload}/>
          <video src={image}></video>
          <textarea placeholder="Descrição"  onChange={e=>setContent(e.target.value)}/>

          <button onClick={createPost}>Enviar</button>


        </div>
        
      </Modal>




          </ContainerHeader>
      )
  }