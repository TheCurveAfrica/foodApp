import { Link } from "react-router-dom"
import "./Vendors.css"

const Vendors = () => {
  return (
    <Link className="Vendors" to={`/app/menu/${1}`}>
        <section className="VendorDetails">
            <h1>Mama Akpos</h1>
            <p>Rice and Beans</p>
        </section>
        <section className="VendorImageHolder">
            <div className="VendorImage">
                <img src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg" alt="food-img"/>
            </div>
        </section>
    </Link>
  )
}

export default Vendors