import { useSelector } from "react-redux"

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
        <h1>Test E commerce</h1>
        <p>User: {user.username}</p>
        <p>Cart: {cart.length}</p>
      </div>
    </nav>
  )
}

export default Navbar
