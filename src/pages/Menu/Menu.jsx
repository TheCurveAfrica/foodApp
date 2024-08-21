import Header from "../../components/Header/Header"
import MenuItem from "../../components/MenuItem/MenuItem"
import "./Menu.css"
import items from "../../database/food.json"

const Menu = () => {
    
  return (
    <div className="Menu">
        <Header/>
        <main className="MenuHolder">
            {
                items.map((e)=>(
                    <MenuItem key={e.id} info={e}/>
                ))
            }
        </main>
    </div>
  )
}

export default Menu