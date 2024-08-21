import "./CartItems.css";
import Img from "../../assets/LaCurve.jpg"

const CartItems = () => {
  return (
    <div className="CartItems">
        <div className="CartItemsImageHolder">
            <img src={Img}/>
        </div>
        <div className="CartItemDetails">
            <h4>Details</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, molestias!</p>
        </div>
        <div className="CartItemsControls">
            <div className="CartItemsButtons">
            <button>-</button>
            <p>{8}</p>
            <button>+</button>
            </div>
            <button>delete</button>
        </div>
    </div>
  )
}

export default CartItems