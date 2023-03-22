import { useEffect, useState } from "react"
import { apiService } from "../../api/api"
import { Card } from "../../components/Card"
import { ContainerFeed } from "./styles"
import { Tpost } from "../../types/types"
import { useNavigate } from "react-router-dom";

export function Feed(){
    const[videos,setVideos]=useState<Tpost[]>([])
    const[user,setUser]=useState<any>("")
    const navigate = useNavigate()



    async function findAllPost(){
        await apiService.post.readAllURL()
        .then((response:any)=>{
            const data = response.data
            setVideos(data)
        })
    }
    function getUser(){
        const info:any = localStorage.getItem("user")!=""?localStorage.getItem("user"):""
        const userInfo = JSON.parse(info)
        
        if(userInfo){
            setUser(userInfo.id)
        }else{
            setUser("")
            localStorage.clear()
            navigate("/")
        }
    }



    useEffect(()=>{
        getUser(),
        findAllPost()
    },[])






    return(
        <ContainerFeed>
           {
            !videos ? "": videos.map((video)=>(
                <Card key={video} title={video.title} author={video.author} content={video.content} video={video.image}/>
            ))
           }
           


        </ContainerFeed>
    )
}