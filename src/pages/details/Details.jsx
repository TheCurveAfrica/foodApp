import "./Details.css";
import { useParams } from "react-router-dom";
import items from "../../database/food.json"
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
const Details = () => {
    const {id} = useParams();
    const [item, setItem] = useState({})

    useEffect(()=>{
        const theItems = items.filter((e)=> e.id == id );
        setItem(theItems[0])
    },[])

  return (
    <div className="Details">
    <Header/>
        <div className="DetailsHolder">
            <div className="DetailsImage">
                <img src={item.image}/>
            </div>
            <div className="DetailsDetails">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>₦ {item.price}</p>
            </div>
            <div className="DetailsButton">
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Details