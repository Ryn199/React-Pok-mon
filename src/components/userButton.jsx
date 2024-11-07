import { Link } from "react-router-dom";
import { useLogin } from "../context/LoginContext";

const UserButton = () => {
  const { isLogin, email } = useLogin(); 

  return (
    <div className="navbar-end">
      {isLogin ? (
        <span className="btn">{email}</span> 
      ) : (
        <a className="btn" href="/login">
          Login
        </a>
      )}
    </div>
  );
};

export default UserButton;
