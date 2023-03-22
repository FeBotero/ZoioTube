import { useEffect, useState } from "react";
import { apiService } from "../../api/api";

import { ContainerCard } from "./styles";
import { Tuser } from "../../types/types";

export function Card({ title, author, content, video }: any) {
  const [userPost, setUserPost] = useState<Tuser>();

  //buscar usuario para aprensertar
  async function getUser() {
    await apiService.user
      .readByIdURL(author)
      .then((response) => {
        const data = response.data;
        setUserPost(data);
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
        {!userPost ? (
          ""
        ) : (
          <div className="infoUser">
            <img
              className="imgAuthor"
              src={userPost.avatar?.toString()}
              alt=""
            />
            <p>{userPost.name}</p>
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
