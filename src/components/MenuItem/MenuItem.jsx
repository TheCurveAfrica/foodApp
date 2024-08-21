import "./MenuItem.css";
import { BiSolidCartAdd } from "react-icons/bi";
import { useNavigate} from "react-router-dom";


const MenuItem = ({info}) => {
  const navigate = useNavigate()
  return (
    <div className="MenuItem">
        <div className="MenuImageHolder" onClick={()=> navigate(`/app/details/${info.id}`)}>
            <img src={info.image} alt="foodItem"/>
        </div>
        <section className="MenuDetails">
            <h3>{info.name}</h3>
            <article>
                <p>${info.price}</p>
                <BiSolidCartAdd/>
            </article>
        </section>
    </div>
  )
}

export default MenuItem