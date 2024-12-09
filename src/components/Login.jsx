import { useSelector, useDispatch } from "react-redux";
import { loggin } from "../store/userSlice";

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        const userData = {
            username: "Dumuthu",
            email: "dumuthu@gmail.com"
        };

        dispatch(loggin(userData));
    }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
