
import {Link} from "react-router-dom"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import * as S from "./styles"
import {useNavigate} from "react-router-dom"
import axios from "axios"
// import RegisterImage from "../../assets/register.svg"

import { apiService } from "../../api/api"
import { Tuser } from "../../types/types"
import { image } from "@cloudinary/url-gen/qualifiers/source"





export function Register(){
    
       const [name,setName]=useState<String>("")
       const [email,setEmail]=useState<String>("")
       const [password,setPassword]=useState<String>("")
       const [urlUser,setUrlUser] = useState<any>("")


       const navigate = useNavigate()
    
    function ValidarEmail (email:any) {
        var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
         return emailPattern.test(email); 
      }
      const nowDate = new Date()

    async function registerUser(event:any){
        event.preventDefault()
          const payload:Tuser = {
            name:name,
            email:email,
            avatar:urlUser,
            password:password,
            createdAt:nowDate,
            
        }
        
        console.log(payload)

        if(ValidarEmail(payload.email)){
            const request = await apiService.user.createURL(payload)
            // const data = await request.json()
            if(request.status==200){
               alert("Usuario criado com sucesso!")
                
                navigate("/login")
                // window.location.href=window.location.href
            }else{
                alert("Aconteceu algo de errado!")
            }
        }else{
           alert("Favor inserir um email valído!")
        }

            
    }
    async function handleImageUpload(event:ChangeEvent<HTMLInputElement>){
        const file = event.target.files![0]
        
        const data = new FormData()
        data.append('file',file)
        data.append("upload_preset","ZoioTube")
        // data.append("cloud_name",process.env.CLOUDINARY_STORAGE_NAME!)
        axios.post('https://api.cloudinary.com/v1_1/dmd5jzmg0/image/upload', data)
          .then(response=>{
            const imageUrl = response.data.secure_url
            setUrlUser(imageUrl)
          })
        
  
        
  
      }

    return(
        <S.Container>
            <img src="" alt="" />
            <S.content>
                <h2>Vamos iniciar essa história juntos?</h2>
                <S.Form>
                
                <form >  
                    
                    <div >
                    <input type="file" id="name" placeholder="Nome" onChange={handleImageUpload}/>
                    </div>
                    {!urlUser?"":<img className="userPhoto" src={urlUser}/>}
                    <div >
                    <input type="text" id="name" placeholder="Nome" onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div >
                    <input type="email" id="userName" placeholder="Email"onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div >
                    <input type="password" id="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    
                        
                    
                    <button onClick={registerUser}>Sing Up</button>
                </form>
                <p>Já tem cadastro? </p>
                <Link to="/login" >Login</Link>
                </S.Form>
               
        
            </S.content>
        
        </S.Container>
    )


}