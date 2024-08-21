import "./Header.css"
import Logo from "../../assets/Logo.jpg"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cart from "../../pages/cart/Cart"
import { useContext } from "react";
import { TheContext } from "../../context/Context";

const Header = () => {
  const {cart, setCart}= useContext(TheContext)
  
  return (
    <>
      <main className="Header">
        <Link to="/app/home">
            <img src={Logo}/>
        </Link>
        <article onClick={()=> setCart(!cart)}>
            <FaShoppingCart/>
        </article>
    </main>
    {cart && <Cart/>}
    </>
  )
}

export default Header