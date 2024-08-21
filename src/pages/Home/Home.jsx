import Header from "../../components/Header/Header"
import Vendors from "../../components/Vendors/Vendors"
import "./Home.css"

const Home = () => {
  return (
    <div className="Home">
      <Header/>
      <main className="HomeMain">
        <Vendors/>
        <Vendors/>
        <Vendors/>
        <Vendors/>
        <Vendors/>
        <Vendors/>
        <Vendors/>
        <Vendors/>
        <Vendors/>
      </main>
    </div>
  )
}

export default Home