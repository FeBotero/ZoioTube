import { Card } from "../../components/Card"
import { ContainerFeed } from "./styles"

export function Feed(){
    const info:any =localStorage.getItem("user")
    const user = JSON.parse(info)
    console.log(user)


    return(
        <ContainerFeed>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>


        </ContainerFeed>
    )
}