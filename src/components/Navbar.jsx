import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);
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
      </div>
    </nav>
  )
}

export default Navbar
