import { useContext } from "react"
import "./Cart.css"
import { TheContext } from "../../context/Context"
import CartItems from "../../components/CartItems/CartItems"

const Cart = () => {
    const {setCart}= useContext(TheContext)
  return (
    <div className="Cart" onMouseOver={()=> setCart(true)} onMouseLeave={()=> setCart(false)}>
        <header>
            <select>
                <option>-- vendor --</option>
                <option>Mama Akpos</option>
            </select>
            <p>
                Total: ₦ 5,000
            </p>
        </header>
        <main>
            <CartItems/>
            <CartItems/>
            <CartItems/>
            <CartItems/>
            <CartItems/>
        </main>
        <div className="CartCheckout">
            <button>Checkout on Mama Akpos</button>
        </div>
    </div>
  )
}

export default Cart