import { useEffect, useState } from "react"
import { apiService } from "../../api/api"


import { ContainerCard } from "./styles"


export function Card({title,author, content, video}:any){
    const [user,setUser]=useState<any>()
    //buscar usuario para aprensertar
    async function getUser(){
        const users:any = await apiService.user.readAllURL()
        const user:any = users.data.filter((user:any) => user.email === author);

        setUser(user)
        

    }
    console.log(user)
    useEffect(()=>{
        getUser()
    },[])
  

    return(
        <ContainerCard>
            <video src={video}></video>
            <div className="contentAuthor">
                <p>oi</p>
            {
                !user?"":user.map((u:any)=>(
                    <>
                    
                    <img src={"e"} alt="" />
                    <p>{u.name}</p>
                    </>
                ))
            }
            
            <div >

            <h3>{title}</h3>
            
            </div>
            </div>

        </ContainerCard>
    )
}