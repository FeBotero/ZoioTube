import { useEffect, useState } from "react";
import { apiService } from "../../api/api";

import { ContainerCard } from "./styles";
import { Tuser } from "../../types/types";

export function Card({ title, author, content, video }: any) {
  const [user, setUser] = useState<Tuser>();
  //buscar usuario para aprensertar
  async function getUser() {
    await apiService.user
      .readByIdURL(author)
      .then((response) => {
        const data = response.data;
        setUser(data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ContainerCard>
      <video className="videoPreview" src={video} controls></video>
      <div className="contentAuthor">
        {!user ? (
          ""
        ) : (
          <div className="infoUser">
            <img className="imgAuthor" src={user.avatar?.toString()} alt="" />
            <p>{user.name}</p>
          </div>
        )}
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </ContainerCard>
  );
}
