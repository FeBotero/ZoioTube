import { ChangeEvent, useContext, useEffect, useState } from "react";
import { apiService } from "../../api/api";
import { Card } from "../../components/Card";
import { ContainerContent, ContainerFeed } from "./styles";
import { Tpost } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { Camera, XCircle } from "phosphor-react";
import Modal from "react-modal";
import axios from "axios";
import "./styles.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export function Feed() {
  const [videos, setVideos] = useState<Tpost[]>([]);
  const { user }: any = useContext(UserContext);
  const [isLogged, setIsLogged] = useState<any>();
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [title, setTitle] = useState<any>();
  const [content, setContent] = useState<any>();
  const [image, setImage] = useState<any>();

  const payload = {
    author: isLogged,
    title: title,
    content: content,
    image: image,
    createdAt: JSON.stringify(new Date()),
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  async function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0];

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ZoioTube");

    axios
      .post("https://api.cloudinary.com/v1_1/dmd5jzmg0/video/upload", data)
      .then((response) => {
        const imageUrl = response.data.secure_url;
        setImage(imageUrl);
      });
  }

  async function findAllPost() {
    await apiService.post.readAllURL().then((response: any) => {
      const data = response.data;
      setVideos(data);
    });
  }
  function getUser() {
    setIsLogged(user);
    // console.log(user);
    // const info: any =
    //   localStorage.getItem("user") != "" ? localStorage.getItem("user") : "";
    // const userInfo = JSON.parse(info);
    // console.log(userInfo);
    // if (userInfo) {
    //   setIsLogged(userInfo.id);
    // } else {
    //   setIsLogged("");
    //   localStorage.clear();
    //   navigate("/");
    // }
  }
  function createPost() {
    if (payload.author != "") {
      apiService.post.createURL(payload);
      closeModal();
      findAllPost();
      setImage("");
    } else {
      alert("Usuário não conectado");
    }
  }

  useEffect(() => {
    getUser();
  }, [user]);
  useEffect(() => {
    findAllPost();
  }, []);
  return (
    <ContainerFeed>
      <button placeholder="Criar" className="create" onClick={openModal}>
        Criar
        <Camera size={36} />
      </button>
      <ContainerContent>
        {!videos
          ? ""
          : videos.map((video) => (
              <Card
                key={video.image}
                title={video.title}
                author={video.author}
                content={video.content}
                video={video.image}
              />
            ))}
      </ContainerContent>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create Content">
        <div className="modal">
          <div className="closeModal">
            <button onClick={closeModal}>
              <XCircle size={32} color="#9d1515" />
            </button>
          </div>
          <div>
            <div>
              <input
                className="title"
                type="text"
                name="title"
                id="title"
                placeholder="Titúlo"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="file">
              <input
                type="file"
                name="fileUpload"
                onChange={handleImageUpload}
              />
              {!image ? "" : <video className="postVideo" src={image} />}
            </div>
            <div>
              <textarea
                placeholder="Descrição"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button onClick={createPost}>Enviar</button>
          </div>
        </div>
      </Modal>
    </ContainerFeed>
  );
}
