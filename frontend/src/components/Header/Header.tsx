import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { ContainerHeader } from "./styles";
import { ThemeContext } from "../../context/ThemeContext";
import { Moon, Sun } from "phosphor-react";
import { UserContext } from "../../context/userContext";

export function Header() {
  const [isLogged, setIsLogged] = useState();
  const navigate = useNavigate();
  const { user }: any = useContext(UserContext);
  const { theme, changeTheme } = useContext(ThemeContext);

  async function Login() {
    navigate("/login");
  }
  function getUser() {
    setIsLogged(user);
  }
  function handleChangeTheme() {
    changeTheme();
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
        <button className="toggle" onClick={handleChangeTheme}>
          {theme == "light" ? (
            <Sun size={32} fill="white" />
          ) : (
            <Moon size={32} />
          )}
        </button>
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
