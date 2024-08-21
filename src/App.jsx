import { createHashRouter, Outlet, RouterProvider } from "react-router-dom"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp";
import Auth from "./components/Auth/Auth"
import Home from "./pages/Home/Home"
import Menu from "./pages/Menu/Menu";
import SideBar from "./components/SideBar/SideBar"
import "./App.css"
import Details from "./pages/details/Details";
import Footer from "./components/Footer/Footer";


const routes = createHashRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/footer",
    element: <Footer/>
  },
    {
    path:"/side",
    element: <SideBar/>
  },
  {
    path: "/app",
    element:<Auth/>,
    children: [
      {
        path: "home",
        element: <Home/>,
        
      },
      {
        path: "menu/:id",
        element: <Menu/>
      },
      {
        path: "details/:id",
        element: <Details/>
      },
    ]
  },

])


function App() {
  

  return (
    <RouterProvider router={routes} fallbackElement={<div>Loading...</div>}/>
  )
}

export default App
