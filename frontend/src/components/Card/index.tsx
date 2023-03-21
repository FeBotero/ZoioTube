import teste from "../../assets/JogoTeste.jpg"
import author from "../../assets/author.jpg"
import { ContainerCard } from "./styles"

export function Card(){
    return(
        <ContainerCard>
            <img className="videoPreview" src={teste} alt="" />
            <div className="contentAuthor">

            <img className="imgAuthor" src={author} alt="Autor" />
            <div >

            <h3>Title</h3>
            <p>Felipe Botero</p>
            </div>
            </div>

        </ContainerCard>
    )
}