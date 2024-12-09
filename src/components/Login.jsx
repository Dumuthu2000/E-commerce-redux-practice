import { useSelector, useDispatch } from "react-redux";
import { loggin } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        const userData = {
            username: "Dumuthu",
            email: "dumuthujayasinghe@gmail.com"
        };

        dispatch(loggin(userData));
        navigate('/')
    }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
