import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { ContainerHeader } from "./styles";

import { UserContext } from "../../context/userContext";
import { apiService } from "../../api/api";
import { Camera } from "phosphor-react";
import Modal from "react-modal";
import axios from "axios";

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

export function Header() {
  const [isLogged, setIsLogged] = useState();
  const navigate = useNavigate();
  const { user }: any = useContext(UserContext);

  async function Login() {
    navigate("/login");
  }
  function getUser() {
    setIsLogged(user);
  }

  function LogOut() {
    localStorage.removeItem("user");
    navigate("/");
    window.location.href = window.location.href;
    navigate("/");
  }

  useEffect(() => {
    getUser();
  }, [user]);

  return (
    <ContainerHeader>
      <div>
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        {!isLogged ? (
          <>
            <button className="login" onClick={Login}>
              Login
            </button>
          </>
        ) : (
          <>
            <div className="functionUser">
              <button className="logout" onClick={LogOut}>
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </ContainerHeader>
  );
}
