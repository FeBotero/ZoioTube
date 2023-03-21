import { Card } from "../../components/Card"

export function Feed(){
    const info:any =localStorage.getItem("user")
    const user = JSON.parse(info)
    console.log(user)


    return(
        <>
           <Card/>
        </>
    )
}