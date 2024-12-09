import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
      dispatch(logout());
      navigate('/login')
    }
  return (
    <nav>
      <div style={{
        display: 'flex', 
        justifyContent:'space-evenly',
        alignItems: 'center'
        }}>
        <Link to={'/'}>
            <h1>Test E commerce</h1>
        </Link>
        <p>User: {user.username}</p>
        <Link to={'/cart'}>
            <p>Cart: {cart.length}</p>
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
