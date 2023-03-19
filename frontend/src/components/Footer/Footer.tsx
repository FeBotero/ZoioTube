import { GithubLogo,LinkedinLogo } from "phosphor-react";
export function Footer(){

    return(
        <>
            <ul>
                <li>©2023 ZoioTube</li>
                <li>Feito com ♥ por Felipe Botero</li>
                <li>
                    <li><a href="https://github.com/FeBotero"><GithubLogo size={32} /></a></li>
                    <li><a href="https://www.linkedin.com/in/felipe-botero-dev/"><LinkedinLogo size={32} /></a></li>
                </li>

            </ul>  
        </>
    )
}